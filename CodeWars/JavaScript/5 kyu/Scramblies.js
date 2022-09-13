// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
    let index = 0;
        let len = str2.length,
            savedIndexes = {},
            isMatch = false;
        while (index < len) {
            let letter = str2[index];
            let startingLetterIndex = (savedIndexes[letter] + 1) || 0;
            let matchIndex = str1.indexOf(letter, startingLetterIndex);
    
            isMatch = matchIndex > -1;
            if (!isMatch) return false;
            index++;
            savedIndexes[letter] = matchIndex;
        }
    
        return true;
}

function scramble1(str1, str2) {
    let j = 0;
    for(i=0; i < str2.length; i++){
      j = str1.indexOf(str2[i]);
      if(j >= 0){
        str1 = `${str1.substring(0, j)}${str1.substring(j + 1, str1.length)}`;
      }else{
        return false;
      }
    }
    
    return true;
  }

 