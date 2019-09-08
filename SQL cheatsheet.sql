-- SQLite3 commands
./sqlite3 db_name.db

.headers on
.backup backup1
.restore backup1

.tables -- list tables
.schema -- list schemas
.dump   -- list all statements 

-- SQL comands
CREATE TABLE table_name (var1 type1 PRIMARY KEY, var2 type2 NOT NULL);
DROP TABLE table_name;

CREATE VIEW view_name AS
  SELECT ...

DROP VIEW view_name;

INSERT INTO table_name (var1, var2) VALUES ("foo", "bar");
INSERT INTO table_name (var1) VALUES ("foo");

UPDATE table_name SET var2="val2" WHERE var1="val1";
DELETE FROM table_name WHERE var="val";

-- Order of operations: select, join, filter, order
-- SELECTION --
SELECT var1, var2 FROM table_name; -- selects & orders result columns
SELECT var1 AS whatever FROM table_name;  -- rename result column
SELECT DISTINCT var1 FROM table_name; -- remove duplicates

SELECT count(*) FROM table_name;  -- count of rows
SELECT count(DISTINCT var1) FROM table_name; -- distinct count of rows

SELECT * FROM table_name LIMIT 1;

-- JOINING --
SELECT * FROM table1 JOIN table2 ON table1.var1 = table2.var2;
SELECT * FROM table1 INNER JOIN table2 ON table1.var1 = table2.var2;

SELECT * FROM table1 
  INNER JOIN table2 ON table1.var1 = table2.var2
  INNER JOIN table3 ON table2.var2 = table3.var3;

-- FILTERING --
SELECT * FROM table_name WHERE var1="val1";  -- filtering
/* Filtering operators
=, >, <, <=, >=
<> is !=
*/

SELECT * FROM table1 WHERE var LIKE "%regex%"; -- not case sensitive
SELECT * FROM table1 WHERE var LIKE "regex%"; -- starts with

-- ORDERING --
SELECT * FROM table_name ORDER BY var1 DESC; -- ordering
SELECT * FROM table_name ORDER BY var2 COLLATE NOCASE; -- ordering, case insensitive

