let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
let minValue = usersByDay[currentIndex];
for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}
console.log('Минимальный элемент: ' + usersByDay[currentIndex]);