// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable (seconds) {
    let HH = '00',
        MM = '00',
        SS = '00';
    
    HH = seconds / (3600);
    MM = seconds % (3600) / 60;
    SS = seconds % 60;
    
    return `${HH < 99 ? (HH < 10 ? `0${Math.trunc(HH)}` : Math.trunc(HH)) : 99}:${(MM < 10 ? `0${Math.trunc(MM)}` : Math.trunc(MM))}:${(SS < 10 ? `0${Math.trunc(SS)}` : Math.trunc(SS))}`;
  }