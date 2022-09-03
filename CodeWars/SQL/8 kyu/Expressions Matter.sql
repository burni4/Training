/*  https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/sql */
SELECT greatest((a + b + c), 
                (a * (b + c)), 
                ((a + b) * c),
                (a * b * c),
                (a + b * c)) AS res 
FROM expression_matter;