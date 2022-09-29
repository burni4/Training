// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function (l, w) {
    let res = 0;
    if (l === w) {
        res = l * w;
    } else {
        res = (l + w) * 2;
    }
    return res;
};