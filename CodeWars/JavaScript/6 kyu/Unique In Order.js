// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript 
function uniqueInOrder(iterable){
  
    let arr = [],
        elem = null;
    
    for( i = 0 ; i < iterable.length; i++){
     if(iterable[i] != elem){
       elem = iterable[i];
       arr.push(elem);
     }
    }
    
    return arr;
    
  }

  // ['A','B','C','D','A','B'])
console.log(uniqueInOrder('AAAABBBCCDAABBB')); 
