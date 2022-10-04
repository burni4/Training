-- https://www.codewars.com/kata/5ab828bcedbcfc65ea000099/train/sql
SELECT 
      pokemon.pokemon_name AS pokemon_name, 
      pokemon.str * multipliers.multiplier AS modifiedStrength, 
      multipliers.element
FROM pokemon AS pokemon 
  INNER JOIN multipliers AS multipliers 
      ON pokemon.element_id = multipliers.id
WHERE str * multiplier >= 40
ORDER BY modifiedStrength DESC