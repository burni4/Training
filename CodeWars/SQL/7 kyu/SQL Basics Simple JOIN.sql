-- https://www.codewars.com/kata/5802e32dd8c944e562000020/train/sql
SELECT 
  products.id,
  products.name,
  products.isbn,
  products.company_id,
  products.price,
  companies.name AS company_name
  FROM products AS products 
    INNER JOIN companies AS companies
    ON products.company_id = companies.id