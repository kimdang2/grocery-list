/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

-- DROP TABLE IF EXISTS grocery_db;
-- CREATE DATABASE grocrey_db;

-- USE grocery_db;

-- CREATE TABLE groceryTable (
--   id INTEGER (3) NOT NULL AUTO_INCREMENT ,
--   items VARCHAR(30) NOT NULL,
--   quantity INTEGER(30) NOT NULL,
--   PRIMARY KEY (id)
-- );

DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE groceryTable (
  id int(3) NOT NULL AUTO_INCREMENT,
  item VARCHAR(30) NOT NULL,
  quantity INT(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO groceryTable (item,quantity) VALUES ('feet','3');
INSERT INTO groceryTable (item,quantity) VALUES ('toe','2');