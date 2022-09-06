// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature,n){
    let arr = signature,
        j = 0;
    
    for(i = 3; i < n ; i++){
      
      arr.push(arr[j] + arr[j+1] + arr[j+2]);
      
      j++;
      
    }
    
    return arr.splice(0, n);
}