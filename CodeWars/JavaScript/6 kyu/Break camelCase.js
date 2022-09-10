// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {

    let str = '';
    
    for(i = string.length - 1; i >= 0; i--){
      str = (string[i].toUpperCase() === string[i] ? ' ' + string[i]: string[i]) + str; 
    }
    
    return str;
  }
  console.log(solution("camelCasing"));
  