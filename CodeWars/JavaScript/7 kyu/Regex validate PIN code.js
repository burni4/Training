// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN (pin) {
  
    let preparedPin = pin.replace(/\D/g, '');
    return preparedPin === pin && (pin.length === 4 || pin.length === 6);
    
}