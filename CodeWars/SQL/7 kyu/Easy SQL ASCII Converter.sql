-- https://www.codewars.com/kata/594804a218e96caa8d00051b/train/sql
SELECT
      ASCII(LEFT(name,1)) as name, 
      ASCII(LEFT(race,1)) as race,
      id,
      birthday
FROM demographics