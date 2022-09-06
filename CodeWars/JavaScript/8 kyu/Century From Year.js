// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
    return Math.floor(year/100) + (year % 100 > 0 ? 1 : 0);
}
