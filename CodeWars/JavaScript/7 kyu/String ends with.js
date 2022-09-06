// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending){
  
    if(str.indexOf(ending, str.length - ending.length) >= 0){
      return true;
    } else {
      return false;
    }
    
  }