// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
    let strN = String(n),
        arr = [];
    for(i = 0; i < strN.length; i++){
      arr.unshift(Number(strN[i]));
    }
    return arr;
  }