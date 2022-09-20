// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr, n) {
    let numObj = {}, newArr = [];

    arr.forEach((number) => {
        if (numObj[number] === undefined) {
            numObj[number] = 1;
        } else {
            numObj[number]++;
        }
        if (numObj[number] <= n) {
            newArr.push(number);
        }
    });

    return newArr;
}