--https://www.codewars.com/kata/5809508cc47d327c12000084/train/sql
-- Create your SELECT statement here
SELECT id AS id,
        name as name,
        age as age
from people
  WHERE age > 50
  ORDER BY age DESC