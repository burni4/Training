// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((previousValue, currentValue) => previousValue + currentValue) / classPoints.length < yourPoints;
  }