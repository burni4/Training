// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n){
  
    let arrStrN = String(n).split('');
    
      arrStrN.sort(function(a, b) {
        if (Number(a) < Number(b)) {
          return 1;
        }
        if (Number(a) > Number(b)) {
          return -1;
        }
        return 0;
      });   
    
    return Number(arrStrN.join(''));
    
  }