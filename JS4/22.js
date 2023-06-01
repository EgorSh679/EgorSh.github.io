let usersByDay = [1, 2, 3, 4, 5, 6];
console.log(usersByDay);
let median;

if (usersByDay.length % 2 === 0) {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  console.log(leftIndex, rightIndex);
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
  console.log(median);
} else {
  let medianIndex = (usersByDay.length - 1) / 2;
  console.log(medianIndex);
  median = usersByDay[medianIndex];
  console.log(median);
}
console.log(median);