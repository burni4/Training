// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript 
function bmi(weight, height) {
    const curBmi = weight / Math.pow(height, 2);
    
    if(curBmi <= 18.5){
      return 'Underweight';
    } else if (curBmi <= 25.0){
      return 'Normal';
    } else if (curBmi <= 30.0){
      return 'Overweight';
    } else {
        return 'Obese';
    } 
  }