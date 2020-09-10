use super::TestApi;
use crate::{connector::Queryable, single::Quaint};
use names::Generator;
use once_cell::sync::Lazy;
use std::env;

pub static CONN_STR: Lazy<String> = Lazy::new(|| env::var("TEST_MSSQL").expect("TEST_MSSQL env var"));

pub(crate) async fn mssql_test_api<'a>() -> crate::Result<MsSql<'a>> {
    MsSql::new().await
}

pub struct MsSql<'a> {
    names: Generator<'a>,
    conn: Quaint,
}

#[async_trait::async_trait]
impl<'a> TestApi for MsSql<'a> {
    async fn new() -> crate::Result<Self> {
        let names = Generator::default();
        let conn = Quaint::new(&*CONN_STR).await?;

        Ok(Self { names, conn })
    }

    fn system(&self) -> &'static str {
        "mssql"
    }

    async fn create_type_table(&mut self, r#type: &str) -> crate::Result<String> {
        self.create_table(&format!("{}, value {}", self.autogen_id("id"), r#type))
            .await
    }

    async fn create_table(&mut self, columns: &str) -> crate::Result<String> {
        let name = format!("##{}", self.get_name());

        let create = format!(
            r##"
            CREATE TABLE {} ({})
            "##,
            name, columns,
        );

        self.conn().raw_cmd(&create).await?;

        Ok(name)
    }

    async fn create_index(&mut self, table: &str, columns: &str) -> crate::Result<String> {
        let name = self.get_name();

        let create = format!(
            r##"
            CREATE UNIQUE INDEX {} ON {} ({})
            "##,
            name, table, columns
        );

        self.conn().raw_cmd(&create).await?;

        Ok(name)
    }

    fn conn(&self) -> &Quaint {
        &self.conn
    }

    fn unique_constraint(&mut self, column: &str) -> String {
        let name = format!("{}", self.names.next().unwrap().replace('-', ""));
        format!("CONSTRAINT {} UNIQUE({})", name, column)
    }

    fn foreign_key(&mut self, parent_table: &str, parent_column: &str, child_column: &str) -> String {
        let name = self.get_name();

        format!(
            "CONSTRAINT {} FOREIGN KEY ({}) REFERENCES {}({})",
            &name, child_column, parent_table, parent_column
        )
    }

    fn autogen_id(&self, name: &str) -> String {
        format!("{} INT IDENTITY(1,1) PRIMARY KEY", name)
    }

    fn get_name(&mut self) -> String {
        self.names.next().unwrap().replace('-', "")
    }
}