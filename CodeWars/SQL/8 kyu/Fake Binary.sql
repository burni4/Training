-- https://www.codewars.com/kata/57eae65a4321032ce000002d/train/sql
-- # write your SQL statement here: you are given a table 'fakebin' with column 'x', return a table with column 'x' and your result in a column named 'res'.
SELECT x, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(x,'1','0'),'2','0'),'3','0'),'4','0'),'5','1'),'6','1'),'7','1'),'8','1'),'9','1') AS res FROM fakebin

-- v2
SELECT x, TRANSLATE(x, '123456789', '000011111') AS res FROM fakebin