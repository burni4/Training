// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers){
    let num = 0;
      numbers.forEach((item) => { num += Math.pow(item, 2)});
    return num;
} 