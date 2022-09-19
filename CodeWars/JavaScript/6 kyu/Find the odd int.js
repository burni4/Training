// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript 
function findOdd(A) {
  
    A.sort((a, b) => {return a - b});
    let curN, j;
    
    for(i = 0; i < A.length; i++){
      if(i === 0 || curN != A[i]){    
        if(j%2 == 1){
          return curN;
        }  
        curN = A[i];
        j = 1;
      } else {
        j++;
      }
      
    }
    return curN;
  }