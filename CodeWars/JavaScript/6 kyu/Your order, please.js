// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words) {
    let arr = words.split(" "),
        outpuStr = '';

    for (i = 1; i <= 9; i++) {

        arr.forEach((elem) => {
            if (elem.indexOf(String(i)) >= 0) {
                outpuStr += (elem + ' ')
            }
        });
    }
    return outpuStr.trimEnd();
}