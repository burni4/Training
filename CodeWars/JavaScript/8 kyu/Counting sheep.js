//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep) {
    let num = 0;
    arrayOfSheep.forEach((item) => {
        if (item) {
            num++
        }
    });
    return num;
}