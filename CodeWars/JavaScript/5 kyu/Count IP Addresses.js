// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end){
  
    let arrStart = start.split("."),
        arrEnd = end.split(".");
    
    let a = arrEnd[0] - arrStart[0],
        b = arrEnd[1] - arrStart[1],
        c = arrEnd[2] - arrStart[2],
        d = arrEnd[3] - arrStart[3];
    
    
    return (a * 256 * 256 * 256) + (b * 256 * 256) + (c * 256) + d;
  }