// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    let count = 0, vowels = 'aeiou';

    for (i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) >= 0) {
            count++;
        }
    }

    return count;
}