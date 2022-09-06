// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  
  if(array && array.length > 1) {
    
      let sortedArray = array.sort((a,b) => a - b).slice(1, -1);
      
      return sortedArray.reduce((acc, cur) => acc + cur, 0)
  }
  return 0
}



  