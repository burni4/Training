// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
function int32ToIp(int32){
  
    let a = 0, b = 0, c = 0, d = 0;
    
    a = Math.trunc(int32 / 256 ** 3);
    
    b = Math.trunc((int32 % 256 ** 3) / 256 ** 2);
    
    c = Math.trunc((int32 % 256 ** 3) % (256 ** 2) / 256);
    
    d = Math.trunc((int32 % 256 ** 3) % (256 ** 2) % 256);
     
    return `${a}.${b}.${c}.${d}`
  } 