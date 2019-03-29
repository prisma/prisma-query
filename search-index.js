var N = null;var searchIndex = {};
searchIndex["prisma_query"]={"doc":"prisma-query","items":[[0,"ast","prisma_query","An abstract syntax tree for SQL queries.",N,N],[3,"Column","prisma_query::ast","A column definition.",N,N],[3,"Delete","","A builder for a `DELETE` statement.",N,N],[3,"Count","","",N,N],[3,"Distinct","","",N,N],[3,"Over","","",N,N],[3,"RowNumber","","",N,N],[3,"Function","","A database function definition",N,N],[3,"Insert","","A builder for an `INSERT` statement.",N,N],[3,"SingleRowInsert","","",N,N],[3,"MultiRowInsert","","",N,N],[3,"JoinData","","The `JOIN` table and conditions.",N,N],[3,"Ordering","","A list of definitions for the `ORDER BY` statement",N,N],[12,"0","","",0,N],[3,"Row","","A collection of values surrounded by parentheses.",N,N],[3,"Select","","A builder for a `SELECT` statement.",N,N],[3,"Table","","A table definition",N,N],[12,"typ","","",1,N],[12,"alias","","",1,N],[12,"database","","",1,N],[3,"Update","","A builder for an `UPDATE` statement.",N,N],[4,"Compare","","For modeling comparison expression",N,N],[13,"Equals","","`left = right`",2,N],[13,"NotEquals","","`left <> right`",2,N],[13,"LessThan","","`left < right`",2,N],[13,"LessThanOrEquals","","`left <= right`",2,N],[13,"GreaterThan","","`left > right`",2,N],[13,"GreaterThanOrEquals","","`left >= right`",2,N],[13,"In","","`left IN (..)`",2,N],[13,"NotIn","","`left NOT IN (..)`",2,N],[13,"Like","","`left LIKE %..%`",2,N],[13,"NotLike","","`left NOT LIKE %..%`",2,N],[13,"BeginsWith","","`left LIKE ..%`",2,N],[13,"NotBeginsWith","","`left NOT LIKE ..%`",2,N],[13,"EndsInto","","`left LIKE %..`",2,N],[13,"NotEndsInto","","`left NOT LIKE %..`",2,N],[13,"Null","","`value IS NULL`",2,N],[13,"NotNull","","`value IS NOT NULL`",2,N],[13,"Between","","`value` BETWEEN `left` AND `right`",2,N],[13,"NotBetween","","`value` NOT BETWEEN `left` AND `right`",2,N],[4,"ConditionTree","","Tree structures and leaves for condition building.",N,N],[13,"And","","`(left_expression AND right_expression)`",3,N],[13,"Or","","`(left_expression OR right_expression)`",3,N],[13,"Not","","`(NOT expression)`",3,N],[13,"Single","","A single expression leaf",3,N],[13,"NoCondition","","A leaf that does nothing to the condition, `1=1`",3,N],[13,"NegativeCondition","","A leaf that cancels the condition, `1=0`",3,N],[4,"Expression","","A database expression.",N,N],[13,"ConditionTree","","A tree of expressions to evaluate from the deepest value to up",4,N],[13,"Compare","","A comparison expression",4,N],[13,"Value","","A single value, column, row or a nested select",4,N],[4,"OnConflict","","`INSERT` conflict resolution strategies.",N,N],[13,"DoNothing","","When a row already exists, do nothing.",5,N],[4,"Join","","A representation of a `JOIN` statement.",N,N],[13,"Inner","","Implements an `INNER JOIN` with given `JoinData`.",6,N],[13,"LeftOuter","","Implements an `LEFT OUTER JOIN` with given `JoinData`.",6,N],[4,"Order","","The ordering direction",N,N],[13,"Asc","","Ascending",7,N],[13,"Desc","","Descending",7,N],[4,"Query","","A database query",N,N],[13,"Select","","Query for fetching data. E.g. the `SELECT` query.",8,N],[13,"Insert","","",8,N],[13,"Update","","",8,N],[13,"Delete","","",8,N],[4,"TableType","","",N,N],[13,"Table","","",9,N],[13,"Query","","",9,N],[4,"DatabaseValue","","A value we can compare and use in database queries.",N,N],[13,"Parameterized","","Anything that we must parameterize before querying",10,N],[13,"Column","","A database column",10,N],[13,"Row","","Data in a row form, e.g. (1, 2, 3)",10,N],[13,"Select","","A nested `SELECT` statement",10,N],[13,"Function","","A database function call",10,N],[13,"Asterisk","","A qualified asterisk to a table",10,N],[4,"ParameterizedValue","","A value we must parameterize for the prepared statement.",N,N],[13,"Null","","A database null",11,N],[13,"Integer","","An integer value",11,N],[13,"Real","","A floating point value",11,N],[13,"Text","","A string value",11,N],[13,"Boolean","","a boolean value",11,N],[5,"count","","Count of the underlying table where the given expression is not null.",N,[[["t"]],["count"]]],[5,"distinct","","Select distinct rows by given expressions.",N,[[["t"]],["distinct"]]],[5,"row_number","","A number from 1 to n in specified order",N,[[],["rownumber"]]],[5,"asterisk","","A quick alias to create an asterisk to a table.",N,[[],["databasevalue"]]],[11,"new","","Create a column definition.",12,[[["s"]],["self"]]],[11,"table","","Include the table name in the column expression.",12,[[["self"],["table"]],["self"]]],[11,"alias","","Give the column an alias in the query.",12,[[["self"],["s"]],["self"]]],[11,"and","","An `AND` statement, is true when both sides are true.",3,[[["e"],["j"]],["conditiontree"]]],[11,"or","","An `OR` statement, is true when one side is true.",3,[[["e"],["j"]],["conditiontree"]]],[11,"not","","A `NOT` statement, is true when the expression is false.",3,[[["e"]],["conditiontree"]]],[11,"single","","A single leaf, is true when the expression is true.",3,[[["e"]],["conditiontree"]]],[11,"invert_if","","Inverts the entire condition tree if condition is met.",3,[[["self"],["bool"]],["conditiontree"]]],[11,"from","","Creates a new `DELETE` statement for the given table.",13,[[["t"]],["self"]]],[11,"so_that","","Adds `WHERE` conditions to the query. See Comparable for more examples.",13,[[["self"],["t"]],["self"]]],[11,"distinct","","Add another expression to a distinct statement",14,[[["self"],["t"]],["distinct"]]],[11,"is_empty","","",15,[[["self"]],["bool"]]],[11,"order_by","","Define the order of the row number. Is the row order if not set.",16,[[["self"],["t"]],["self"]]],[11,"partition_by","","Define the partitioning of the row number",16,[[["self"],["t"]],["self"]]],[11,"alias","","Give the function an alias in the query.",17,[[["self"],["s"]],["self"]]],[11,"single_into","","Creates a new single row `INSERT` statement for the given table.",18,[[["t"]],["singlerowinsert"]]],[11,"multi_into","","Creates a new multi row `INSERT` statement for the given table.",18,[[["t"],["vec"]],["multirowinsert"]]],[11,"on_conflict","","Sets the conflict resolution strategy.",18,[[["self"],["onconflict"]],["self"]]],[11,"value","","Adds a new value to the `INSERT` statement",19,[[["self"],["k"],["v"]],["singlerowinsert"]]],[11,"values","","Adds a new row to be inserted.",20,[[["self"],["v"]],["self"]]],[11,"new","","",0,[[["vec",["orderdefinition"]]],["self"]]],[11,"is_empty","","",0,[[["self"]],["bool"]]],[11,"is_select","","",8,[[["self"]],["bool"]]],[11,"is_insert","","",8,[[["self"]],["bool"]]],[11,"is_update","","",8,[[["self"]],["bool"]]],[11,"is_delete","","",8,[[["self"]],["bool"]]],[11,"new","","",21,[[],["self"]]],[11,"push","","",21,[[["self"],["t"]],["self"]]],[11,"is_empty","","",21,[[["self"]],["bool"]]],[11,"from","","Creates a new `SELECT` statement for the given table.",22,[[["t"]],["self"]]],[11,"value","","Selects a static value as the column.",22,[[["self"],["t"]],["self"]]],[11,"column","","Adds a column to be selected.",22,[[["self"],["t"]],["self"]]],[11,"columns","","A bulk method to select multiple values.",22,[[["self"],["vec"]],["self"]]],[11,"so_that","","Adds `WHERE` conditions to the query. See Comparable for more examples.",22,[[["self"],["t"]],["self"]]],[11,"inner_join","","Adds `INNER JOIN` clause to the query.",22,[[["self"],["j"]],["self"]]],[11,"left_outer_join","","Adds `LEFT OUTER JOIN` clause to the query.",22,[[["self"],["j"]],["self"]]],[11,"order_by","","Adds an ordering to the `ORDER BY` section.",22,[[["self"],["t"]],["self"]]],[11,"limit","","Sets the `LIMIT` value.",22,[[["self"],["usize"]],["self"]]],[11,"offset","","Sets the `OFFSET` value.",22,[[["self"],["usize"]],["self"]]],[11,"database","","Define in which database the table is located",1,[[["self"],["t"]],["self"]]],[11,"asterisk","","A qualified asterisk to this table",1,[[["self"]],["databasevalue"]]],[11,"table","","Creates the basis for an `UPDATE` statement to the given table.",23,[[["t"]],["self"]]],[11,"set","","Add another column value assignment to the query",23,[[["self"],["k"],["v"]],["update"]]],[11,"so_that","","Adds `WHERE` conditions to the query. See Comparable for more examples.",23,[[["self"],["t"]],["self"]]],[6,"OrderDefinition","","",N,N],[8,"Comparable","","An item that can be compared against other values in the database.",N,N],[10,"equals","","Tests if both sides are the same value.",24,[[["self"],["t"]],["compare"]]],[10,"not_equals","","Tests if both sides are not the same value.",24,[[["self"],["t"]],["compare"]]],[10,"less_than","","Tests if the left side is smaller than the right side.",24,[[["self"],["t"]],["compare"]]],[10,"less_than_or_equals","","Tests if the left side is smaller than the right side or the same.",24,[[["self"],["t"]],["compare"]]],[10,"greater_than","","Tests if the left side is bigger than the right side.",24,[[["self"],["t"]],["compare"]]],[10,"greater_than_or_equals","","Tests if the left side is bigger than the right side or the same.",24,[[["self"],["t"]],["compare"]]],[10,"in_selection","","Tests if the left side is included in the right side collection.",24,[[["self"],["t"]],["compare"]]],[10,"not_in_selection","","Tests if the left side is not included in the right side collection.",24,[[["self"],["t"]],["compare"]]],[10,"like","","Tests if the left side includes the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"not_like","","Tests if the left side does not include the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"begins_with","","Tests if the left side starts with the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"not_begins_with","","Tests if the left side doesn't start with the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"ends_into","","Tests if the left side ends into the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"not_ends_into","","Tests if the left side does not end into the right side string.",24,[[["self"],["t"]],["compare"]]],[10,"is_null","","Tests if the left side is `NULL`.",24,[[["self"]],["compare"]]],[10,"is_not_null","","Tests if the left side is not `NULL`.",24,[[["self"]],["compare"]]],[10,"between","","Tests if the value is between two given values.",24,[[["self"],["t"],["v"]],["compare"]]],[10,"not_between","","Tests if the value is not between two given values.",24,[[["self"],["t"],["v"]],["compare"]]],[8,"Conjuctive","","`AND`, `OR` and `NOT` conjuctive implementations.",N,N],[10,"and","","Builds an `AND` condition having `self` as the left leaf and `other` as the right.",25,[[["self"],["e"]],["conditiontree"]]],[10,"or","","Builds an `OR` condition having `self` as the left leaf and `other` as the right.",25,[[["self"],["e"]],["conditiontree"]]],[10,"not","","Builds a `NOT` condition having `self` as the condition.",25,[[["self"]],["conditiontree"]]],[8,"Joinable","","An item that can be joined.",N,N],[10,"on","","Add the `JOIN` conditions.",26,[[["self"],["t"]],["joindata"]]],[8,"IntoOrderDefinition","","Convert the value into an order definition with order item and direction",N,N],[10,"into_order_definition","","",27,[[["self"]],["orderdefinition"]]],[8,"Orderable","","An item that can be used in the `ORDER BY` statement",N,N],[10,"order","","Order by `self` in the given order",28,[[["self"],["option",["order"]]],["orderdefinition"]]],[11,"ascend","","Change the order to `ASC`",28,[[["self"]],["orderdefinition"]]],[11,"descend","","Change the order to `DESC`",28,[[["self"]],["orderdefinition"]]],[8,"Aliasable","","An object that can be aliased.",N,N],[10,"alias","","Alias table for usage elsewhere in the query.",29,[[["self"],["t"]],["table"]]],[0,"visitor","prisma_query","Visitors for reading an abstract SQL syntax tree, generating the query and gathering parameters in the right order.",N,N],[3,"Sqlite","prisma_query::visitor","A visitor for generating queries for an SQLite database. Requires that `rusqlite` feature flag is selected.",N,N],[8,"Visitor","","A function travelling through the query AST, building the final query string and gathering parameters sent to the database together with the query.",N,N],[18,"C_PARAM","","Parameter character when parameterizing values in the query.",30,N],[18,"C_BACKTICK","","Backtick character to surround identifiers, such as column and table names.",30,N],[18,"C_WILDCARD","","Wildcard character to be used in `LIKE` queries.",30,N],[10,"build","","Convert the given `Query` to an SQL string and a vector of parameters. When certain parameters are replaced with the `C_PARAM` character in the query, the vector should contain the parameter value in the right position.",30,N],[10,"add_parameter","","When called, the visitor decided to not render the parameter into the query, replacing it with the `C_PARAM`, calling `add_parameter` with the replaced value.",30,[[["self"],["parameterizedvalue"]]]],[10,"visit_limit","","The `LIMIT` statement in the query",30,[[["self"],["option",["usize"]]],["string"]]],[10,"visit_offset","","The `OFFSET` statement in the query",30,[[["self"],["usize"]],["string"]]],[10,"visit_function","","A database function.",30,[[["self"],["function"]],["string"]]],[10,"visit_partitioning","","A partitioning statement.",30,[[["self"],["over"]],["string"]]],[11,"visit_joins","","The join statements in the query",30,[[["self"],["vec",["join"]]],["string"]]],[11,"visit_join_data","","",30,[[["self"],["joindata"]],["string"]]],[11,"visit_select","","A walk through a `SELECT` statement",30,[[["self"],["select"]],["string"]]],[11,"visit_insert","","A walk through an `INSERT` statement",30,[[["self"],["insert"]],["string"]]],[11,"visit_update","","A walk through an `UPDATE` statement",30,[[["self"],["update"]],["string"]]],[11,"visit_delete","","A walk through an `DELETE` statement",30,[[["self"],["delete"]],["string"]]],[11,"delimited_identifiers","","A helper for delimiting an identifier, surrounding every part with `C_BACKTICK` and delimiting the values with a `.`",30,[[["vec",["string"]]],["string"]]],[11,"visit_query","","A walk through a complete `Query` statement",30,[[["self"],["query"]],["string"]]],[11,"visit_columns","","The selected columns",30,[[["self"],["vec",["databasevalue"]]],["string"]]],[11,"visit_parameterized","","A visit to a value we parameterize and replace with a ?",30,[[["self"],["parameterizedvalue"]],["string"]]],[11,"visit_database_value","","A visit to a value used in an expression",30,[[["self"],["databasevalue"]],["string"]]],[11,"visit_table","","A database table identifier",30,[[["self"],["table"],["bool"]],["string"]]],[11,"visit_column","","A database column identifier",30,[[["self"],["column"]],["string"]]],[11,"visit_row","","A row of data used as an expression",30,[[["self"],["row"]],["string"]]],[11,"visit_conditions","","A walk through the query conditions",30,[[["self"],["conditiontree"]],["string"]]],[11,"visit_expression","","An expression that can either be a single value, a set of conditions or a comparison call",30,[[["self"],["expression"]],["string"]]],[11,"visit_compare","","A comparison expression",30,[[["self"],["compare"]],["string"]]],[11,"visit_ordering","","A visit in the `ORDER BY` section of the query",30,[[["self"],["ordering"]],["string"]]],[11,"into","prisma_query::ast","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"into","","",31,[[["self"]],["u"]]],[11,"to_owned","","",31,[[["self"]],["t"]]],[11,"clone_into","","",31,N],[11,"from","","",31,[[["t"]],["t"]]],[11,"try_from","","",31,[[["u"]],["result"]]],[11,"borrow","","",31,[[["self"]],["t"]]],[11,"get_type_id","","",31,[[["self"]],["typeid"]]],[11,"try_into","","",31,[[["self"]],["result"]]],[11,"borrow_mut","","",31,[[["self"]],["t"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"to_owned","","",14,[[["self"]],["t"]]],[11,"clone_into","","",14,N],[11,"from","","",14,[[["t"]],["t"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,N],[11,"from","","",15,[[["t"]],["t"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,N],[11,"from","","",16,[[["t"]],["t"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,N],[11,"from","","",17,[[["t"]],["t"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"to_owned","","",18,[[["self"]],["t"]]],[11,"clone_into","","",18,N],[11,"from","","",18,[[["t"]],["t"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"into","","",19,[[["self"]],["u"]]],[11,"from","","",19,[[["t"]],["t"]]],[11,"try_from","","",19,[[["u"]],["result"]]],[11,"borrow","","",19,[[["self"]],["t"]]],[11,"get_type_id","","",19,[[["self"]],["typeid"]]],[11,"try_into","","",19,[[["self"]],["result"]]],[11,"borrow_mut","","",19,[[["self"]],["t"]]],[11,"into","","",20,[[["self"]],["u"]]],[11,"from","","",20,[[["t"]],["t"]]],[11,"try_from","","",20,[[["u"]],["result"]]],[11,"borrow","","",20,[[["self"]],["t"]]],[11,"get_type_id","","",20,[[["self"]],["typeid"]]],[11,"try_into","","",20,[[["self"]],["result"]]],[11,"borrow_mut","","",20,[[["self"]],["t"]]],[11,"into","","",32,[[["self"]],["u"]]],[11,"to_owned","","",32,[[["self"]],["t"]]],[11,"clone_into","","",32,N],[11,"from","","",32,[[["t"]],["t"]]],[11,"try_from","","",32,[[["u"]],["result"]]],[11,"borrow","","",32,[[["self"]],["t"]]],[11,"get_type_id","","",32,[[["self"]],["typeid"]]],[11,"try_into","","",32,[[["self"]],["result"]]],[11,"borrow_mut","","",32,[[["self"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",21,[[["self"]],["u"]]],[11,"to_owned","","",21,[[["self"]],["t"]]],[11,"clone_into","","",21,N],[11,"from","","",21,[[["t"]],["t"]]],[11,"try_from","","",21,[[["u"]],["result"]]],[11,"borrow","","",21,[[["self"]],["t"]]],[11,"get_type_id","","",21,[[["self"]],["typeid"]]],[11,"try_into","","",21,[[["self"]],["result"]]],[11,"borrow_mut","","",21,[[["self"]],["t"]]],[11,"into","","",22,[[["self"]],["u"]]],[11,"to_owned","","",22,[[["self"]],["t"]]],[11,"clone_into","","",22,N],[11,"from","","",22,[[["t"]],["t"]]],[11,"try_from","","",22,[[["u"]],["result"]]],[11,"borrow","","",22,[[["self"]],["t"]]],[11,"get_type_id","","",22,[[["self"]],["typeid"]]],[11,"try_into","","",22,[[["self"]],["result"]]],[11,"borrow_mut","","",22,[[["self"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",23,[[["self"]],["u"]]],[11,"to_owned","","",23,[[["self"]],["t"]]],[11,"clone_into","","",23,N],[11,"from","","",23,[[["t"]],["t"]]],[11,"try_from","","",23,[[["u"]],["result"]]],[11,"borrow","","",23,[[["self"]],["t"]]],[11,"get_type_id","","",23,[[["self"]],["typeid"]]],[11,"try_into","","",23,[[["self"]],["result"]]],[11,"borrow_mut","","",23,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,N],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"into","prisma_query::visitor","",33,[[["self"]],["u"]]],[11,"from","","",33,[[["t"]],["t"]]],[11,"try_from","","",33,[[["u"]],["result"]]],[11,"borrow","","",33,[[["self"]],["t"]]],[11,"get_type_id","","",33,[[["self"]],["typeid"]]],[11,"try_into","","",33,[[["self"]],["result"]]],[11,"borrow_mut","","",33,[[["self"]],["t"]]],[11,"equals","prisma_query::ast","",21,[[["self"],["t"]],["compare"]]],[11,"not_equals","","",21,[[["self"],["t"]],["compare"]]],[11,"less_than","","",21,[[["self"],["t"]],["compare"]]],[11,"less_than_or_equals","","",21,[[["self"],["t"]],["compare"]]],[11,"greater_than","","",21,[[["self"],["t"]],["compare"]]],[11,"greater_than_or_equals","","",21,[[["self"],["t"]],["compare"]]],[11,"in_selection","","",21,[[["self"],["t"]],["compare"]]],[11,"not_in_selection","","",21,[[["self"],["t"]],["compare"]]],[11,"like","","",21,[[["self"],["t"]],["compare"]]],[11,"not_like","","",21,[[["self"],["t"]],["compare"]]],[11,"begins_with","","",21,[[["self"],["t"]],["compare"]]],[11,"not_begins_with","","",21,[[["self"],["t"]],["compare"]]],[11,"ends_into","","",21,[[["self"],["t"]],["compare"]]],[11,"not_ends_into","","",21,[[["self"],["t"]],["compare"]]],[11,"is_null","","",21,[[["self"]],["compare"]]],[11,"is_not_null","","",21,[[["self"]],["compare"]]],[11,"between","","",21,[[["self"],["t"],["v"]],["compare"]]],[11,"not_between","","",21,[[["self"],["t"],["v"]],["compare"]]],[11,"equals","","",10,[[["self"],["t"]],["compare"]]],[11,"not_equals","","",10,[[["self"],["t"]],["compare"]]],[11,"less_than","","",10,[[["self"],["t"]],["compare"]]],[11,"less_than_or_equals","","",10,[[["self"],["t"]],["compare"]]],[11,"greater_than","","",10,[[["self"],["t"]],["compare"]]],[11,"greater_than_or_equals","","",10,[[["self"],["t"]],["compare"]]],[11,"in_selection","","",10,[[["self"],["t"]],["compare"]]],[11,"not_in_selection","","",10,[[["self"],["t"]],["compare"]]],[11,"like","","",10,[[["self"],["t"]],["compare"]]],[11,"not_like","","",10,[[["self"],["t"]],["compare"]]],[11,"begins_with","","",10,[[["self"],["t"]],["compare"]]],[11,"not_begins_with","","",10,[[["self"],["t"]],["compare"]]],[11,"ends_into","","",10,[[["self"],["t"]],["compare"]]],[11,"not_ends_into","","",10,[[["self"],["t"]],["compare"]]],[11,"is_null","","",10,[[["self"]],["compare"]]],[11,"is_not_null","","",10,[[["self"]],["compare"]]],[11,"between","","",10,[[["self"],["t"],["v"]],["compare"]]],[11,"not_between","","",10,[[["self"],["t"],["v"]],["compare"]]],[11,"order","","",12,[[["self"],["option",["order"]]],["orderdefinition"]]],[11,"into_order_definition","","",12,[[["self"]],["orderdefinition"]]],[11,"into_order_definition","prisma_query","",34,[[["self"]],["orderdefinition"]]],[11,"alias","prisma_query::ast","",1,[[["self"],["t"]],["self"]]],[11,"build","prisma_query::visitor","",33,N],[11,"add_parameter","","",33,[[["self"],["parameterizedvalue"]]]],[11,"visit_limit","","",33,[[["self"],["option",["usize"]]],["string"]]],[11,"visit_function","","",33,[[["self"],["function"]],["string"]]],[11,"visit_partitioning","","",33,[[["self"],["over"]],["string"]]],[11,"visit_offset","","",33,[[["self"],["usize"]],["string"]]],[11,"into","prisma_query::ast","",12,[[["self"]],["databasevalue"]]],[11,"into","","",2,[[["self"]],["conditiontree"]]],[11,"into","","",2,[[["self"]],["expression"]]],[11,"into","","",3,[[["self"]],["expression"]]],[11,"into","","",22,[[["self"]],["databasevalue"]]],[11,"default","","",12,[[],["column"]]],[11,"default","","",3,[[],["self"]]],[11,"default","","",15,[[],["over"]]],[11,"default","","",16,[[],["rownumber"]]],[11,"default","","",0,[[],["ordering"]]],[11,"default","","",21,[[],["row"]]],[11,"default","","",22,[[],["select"]]],[11,"eq","","",12,[[["self"],["column"]],["bool"]]],[11,"ne","","",12,[[["self"],["column"]],["bool"]]],[11,"eq","","",2,[[["self"],["compare"]],["bool"]]],[11,"ne","","",2,[[["self"],["compare"]],["bool"]]],[11,"eq","","",3,[[["self"],["conditiontree"]],["bool"]]],[11,"ne","","",3,[[["self"],["conditiontree"]],["bool"]]],[11,"eq","","",13,[[["self"],["delete"]],["bool"]]],[11,"ne","","",13,[[["self"],["delete"]],["bool"]]],[11,"eq","","",4,[[["self"],["expression"]],["bool"]]],[11,"ne","","",4,[[["self"],["expression"]],["bool"]]],[11,"eq","","",31,[[["self"],["count"]],["bool"]]],[11,"ne","","",31,[[["self"],["count"]],["bool"]]],[11,"eq","","",14,[[["self"],["distinct"]],["bool"]]],[11,"ne","","",14,[[["self"],["distinct"]],["bool"]]],[11,"eq","","",15,[[["self"],["over"]],["bool"]]],[11,"ne","","",15,[[["self"],["over"]],["bool"]]],[11,"eq","","",16,[[["self"],["rownumber"]],["bool"]]],[11,"ne","","",16,[[["self"],["rownumber"]],["bool"]]],[11,"eq","","",17,[[["self"],["function"]],["bool"]]],[11,"ne","","",17,[[["self"],["function"]],["bool"]]],[11,"eq","","",18,[[["self"],["insert"]],["bool"]]],[11,"ne","","",18,[[["self"],["insert"]],["bool"]]],[11,"eq","","",5,[[["self"],["onconflict"]],["bool"]]],[11,"eq","","",32,[[["self"],["joindata"]],["bool"]]],[11,"ne","","",32,[[["self"],["joindata"]],["bool"]]],[11,"eq","","",6,[[["self"],["join"]],["bool"]]],[11,"ne","","",6,[[["self"],["join"]],["bool"]]],[11,"eq","","",0,[[["self"],["ordering"]],["bool"]]],[11,"ne","","",0,[[["self"],["ordering"]],["bool"]]],[11,"eq","","",7,[[["self"],["order"]],["bool"]]],[11,"eq","","",8,[[["self"],["query"]],["bool"]]],[11,"ne","","",8,[[["self"],["query"]],["bool"]]],[11,"eq","","",21,[[["self"],["row"]],["bool"]]],[11,"ne","","",21,[[["self"],["row"]],["bool"]]],[11,"eq","","",22,[[["self"],["select"]],["bool"]]],[11,"ne","","",22,[[["self"],["select"]],["bool"]]],[11,"eq","","",9,[[["self"],["tabletype"]],["bool"]]],[11,"ne","","",9,[[["self"],["tabletype"]],["bool"]]],[11,"eq","","",1,[[["self"],["table"]],["bool"]]],[11,"ne","","",1,[[["self"],["table"]],["bool"]]],[11,"eq","","",23,[[["self"],["update"]],["bool"]]],[11,"ne","","",23,[[["self"],["update"]],["bool"]]],[11,"eq","","",11,[[["self"],["parameterizedvalue"]],["bool"]]],[11,"ne","","",11,[[["self"],["parameterizedvalue"]],["bool"]]],[11,"eq","","",10,[[["self"],["databasevalue"]],["bool"]]],[11,"ne","","",10,[[["self"],["databasevalue"]],["bool"]]],[11,"from","","",12,[[["str"]],["column"]]],[11,"from","","",12,N],[11,"from","","",12,N],[11,"from","","",12,[[["string"]],["column"]]],[11,"from","","",12,N],[11,"from","","",12,N],[11,"from","","",3,[[["select"]],["conditiontree"]]],[11,"from","","",8,[[["delete"]],["query"]]],[11,"from","","",4,[[["select"]],["expression"]]],[11,"from","","",17,[[["rownumber"]],["function"]]],[11,"from","","",10,[[["rownumber"]],["databasevalue"]]],[11,"from","","",17,[[["distinct"]],["function"]]],[11,"from","","",10,[[["distinct"]],["databasevalue"]]],[11,"from","","",17,[[["count"]],["function"]]],[11,"from","","",10,[[["count"]],["databasevalue"]]],[11,"from","","",8,[[["insert"]],["query"]]],[11,"from","","",18,[[["singlerowinsert"]],["insert"]]],[11,"from","","",18,[[["multirowinsert"]],["insert"]]],[11,"from","","",8,[[["singlerowinsert"]],["query"]]],[11,"from","","",8,[[["multirowinsert"]],["query"]]],[11,"from","","",21,[[["vec"]],["row"]]],[11,"from","","",21,N],[11,"from","","",21,N],[11,"from","","",21,N],[11,"from","","",21,N],[11,"from","","",8,[[["select"]],["query"]]],[11,"from","","",1,[[["str"]],["table"]]],[11,"from","","",1,N],[11,"from","","",1,[[["string"]],["table"]]],[11,"from","","",1,N],[11,"from","","",1,[[["select"]],["table"]]],[11,"from","","",8,[[["update"]],["query"]]],[11,"from","","",11,[[["str"]],["parameterizedvalue"]]],[11,"from","","",11,[[["string"]],["self"]]],[11,"from","","",11,[[["i64"]],["self"]]],[11,"from","","",11,[[["f64"]],["self"]]],[11,"from","","",11,[[["bool"]],["self"]]],[11,"from","","",10,[[["row"]],["self"]]],[11,"from","","",10,[[["function"]],["self"]]],[11,"from","","",10,[[["t"]],["databasevalue"]]],[11,"from","","",10,[[["vec"]],["databasevalue"]]],[11,"clone","","",12,[[["self"]],["column"]]],[11,"clone","","",2,[[["self"]],["compare"]]],[11,"clone","","",3,[[["self"]],["conditiontree"]]],[11,"clone","","",13,[[["self"]],["delete"]]],[11,"clone","","",4,[[["self"]],["expression"]]],[11,"clone","","",31,[[["self"]],["count"]]],[11,"clone","","",14,[[["self"]],["distinct"]]],[11,"clone","","",15,[[["self"]],["over"]]],[11,"clone","","",16,[[["self"]],["rownumber"]]],[11,"clone","","",17,[[["self"]],["function"]]],[11,"clone","","",18,[[["self"]],["insert"]]],[11,"clone","","",5,[[["self"]],["onconflict"]]],[11,"clone","","",32,[[["self"]],["joindata"]]],[11,"clone","","",6,[[["self"]],["join"]]],[11,"clone","","",0,[[["self"]],["ordering"]]],[11,"clone","","",7,[[["self"]],["order"]]],[11,"clone","","",8,[[["self"]],["query"]]],[11,"clone","","",21,[[["self"]],["row"]]],[11,"clone","","",22,[[["self"]],["select"]]],[11,"clone","","",9,[[["self"]],["tabletype"]]],[11,"clone","","",1,[[["self"]],["table"]]],[11,"clone","","",23,[[["self"]],["update"]]],[11,"clone","","",11,[[["self"]],["parameterizedvalue"]]],[11,"clone","","",10,[[["self"]],["databasevalue"]]],[11,"fmt","","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",31,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",14,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",18,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",32,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",21,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",22,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",23,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"to_sql","","",11,[[["self"]],["result",["tosqloutput","rusqlerror"]]]],[11,"ascend","","Change the order to `ASC`",28,[[["self"]],["orderdefinition"]]],[11,"descend","","Change the order to `DESC`",28,[[["self"]],["orderdefinition"]]]],"paths":[[3,"Ordering"],[3,"Table"],[4,"Compare"],[4,"ConditionTree"],[4,"Expression"],[4,"OnConflict"],[4,"Join"],[4,"Order"],[4,"Query"],[4,"TableType"],[4,"DatabaseValue"],[4,"ParameterizedValue"],[3,"Column"],[3,"Delete"],[3,"Distinct"],[3,"Over"],[3,"RowNumber"],[3,"Function"],[3,"Insert"],[3,"SingleRowInsert"],[3,"MultiRowInsert"],[3,"Row"],[3,"Select"],[3,"Update"],[8,"Comparable"],[8,"Conjuctive"],[8,"Joinable"],[8,"IntoOrderDefinition"],[8,"Orderable"],[8,"Aliasable"],[8,"Visitor"],[3,"Count"],[3,"JoinData"],[3,"Sqlite"],[6,"OrderDefinition"]]};
initSearch(searchIndex);
