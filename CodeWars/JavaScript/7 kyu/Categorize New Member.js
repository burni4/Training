// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data) {
    let res = [];

    for (var i = 0; i < data.length; i++) {
        res[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }

    return res;
}