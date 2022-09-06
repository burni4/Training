//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
function countBy(x, n) {
    let z = [],
        a = x;
    
    for(i = 1; i <= n; i++){
      z.push(a);
      a+=x;
    }
    
    return z;
  }