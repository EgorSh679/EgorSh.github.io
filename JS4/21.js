if (usersByDay.length % 2 === 0) {
  let firstMedian = usersByDay[(usersByDay.length / 2) - 1];
  let secondMedian = usersByDay[usersByDay.length / 2];
  median = (firstMedian + secondMedian) / 2;
} else {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
  console.log(medianIndex);
  console.log(median);
}
console.log(median);