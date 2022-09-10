// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript 
function removeSmallest(numbers) {
    let min = Math.min(...numbers),
        skip = true;
        arr = [];
    
    numbers.forEach((elem) => {
      if(skip && min === elem){ 
        skip = false;
      } else {
        arr.push(elem);
      }
      
    });
    
    return arr;
  }