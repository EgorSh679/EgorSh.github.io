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
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
  }
}
console.log('Минимальный элемент: ' + minValue);