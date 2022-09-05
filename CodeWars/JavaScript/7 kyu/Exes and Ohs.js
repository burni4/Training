// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
  
    let amountO = 0,
        amountX = 0,
        lcStr = str.toLowerCase(); 
  
  for(i = 0; i < lcStr.length; i++){
    if(lcStr[i] === 'x'){
      amountX++;
    }else if(lcStr[i] === 'o'){
      amountO++;
    }
  };
  
  return amountO === amountX;
}