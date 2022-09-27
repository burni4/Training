// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    let maxLength = nFloors * 2 - 1, arr = [];

    for (floor = 1; floor <= nFloors; floor++) {

        let curLength = floor * 2 - 1;
        let multiplier = '', strSpaces = '';

        for (j = 0; j < curLength; j++) {
            multiplier += "*";
        }

        for (j = 0; j < (maxLength - curLength) / 2; j++) {
            strSpaces += " ";
        }

        arr.push(strSpaces + multiplier + strSpaces);

    }

    return arr;
}