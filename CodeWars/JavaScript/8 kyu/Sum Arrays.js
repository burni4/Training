// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Sum Numbers
function sum (numbers) {
    
    let sum = 0;
    
    numbers.map((elem) => {
      sum+= elem;
    }); 
        
    return sum;
    
  };