//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str){
    let newStr = str.toLowerCase();
    for (i = 0; i < newStr.length; i++){
      if(newStr.indexOf(newStr[i], i + 1) > 0){
        return false;
      }     
    };
    return true;
}