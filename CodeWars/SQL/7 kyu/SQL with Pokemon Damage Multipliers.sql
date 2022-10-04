-- https://www.codewars.com/kata/5ab828bcedbcfc65ea000099/train/sql
SELECT 
      pokemon_name AS pokemon_name, 
      str * multiplier AS modifiedStrength, 
      element
FROM pokemon AS pokemon 
  INNER JOIN multipliers AS multipliers 
      ON pokemon.element_id = multipliers.id
WHERE str * multiplier >= 40
ORDER BY modifiedStrength DESC