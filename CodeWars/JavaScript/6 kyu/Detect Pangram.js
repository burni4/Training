// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz',
    lcString = string.toLowerCase(); 
    
    for(i = 0; i < alphabet.length ; i++){
      if(lcString.indexOf(alphabet[i]) === -1){
        return false;
      }
    }
    return true; 
}