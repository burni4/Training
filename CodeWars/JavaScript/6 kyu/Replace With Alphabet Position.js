//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
  
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    text = text.toUpperCase();
          
    let pos = '';
    
    for(i = 0; i < text.length ;i++){
      
        alphabet.map((item, j) => {
          if(text[i] === item){
            pos += ' '+(j + 1);      
          }
      }); 
    } 
    return pos.slice(1);
  }