//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
    let str = '',
        lowCase = word.toLowerCase();

    for (i = 0; i < word.length; i++) {
        if (lowCase.split(lowCase[i]).length > 2) {
            str += ')';
        } else {
            str += '(';
        }
    }
    return str;
}
