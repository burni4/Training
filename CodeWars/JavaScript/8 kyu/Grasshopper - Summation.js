// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
var summation = function (num) {
    let sum = 0;
    
    while(num > 0){
      sum += num; 
      num--;
    }
    
    return sum;
  }