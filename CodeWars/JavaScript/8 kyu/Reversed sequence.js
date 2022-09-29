//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = n => {
    let arr = []
    for (i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};