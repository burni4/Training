// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
intervals.sort((a, b) => a[0] - b[0]);
let total = 0;
let highest = 0;

for (let i = 0; i < intervals.length; i++) {
  if (highest <= intervals[i][0] || i === 0) {
    total += intervals[i][1] - intervals[i][0];
    highest = intervals[i][1];
  } else if (highest < intervals[i][1] && highest > intervals[i][0]) {
    total += intervals[i][1] - highest;
    highest = intervals[i][1];
  }
}

return total;