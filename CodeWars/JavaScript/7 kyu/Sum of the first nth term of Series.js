// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n) {
    let res = 0, num = 1;
    for (let i = 0; i < n; i += 1) {
        if (i === 0) {
            res = 1;
        } else {
            num += 3;
            res = res + (1 / num);
        }
    }
    return String(res.toFixed(2));
}