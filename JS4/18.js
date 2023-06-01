let usersByDay = [
  [4, 2, 1, 3],
  [5, 1, 2, 6],
  [7, 4, 2, 3],
  [4, 2, 3, 5]
];
let currentIndex = 0;
for (let i = 0; i < usersByDay.length; i++) {
  console.log('Сортируем ' + (i+1) + '-й подмассив: ' + usersByDay[i]);
  currentIndex = i;
  let minValue = usersByDay[currentIndex];
  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = usersByDay[j];
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + usersByDay[currentIndex]);
      console.log('Массив сейчас: ' + usersByDay[i]);
    }
  }
  console.log('На позиции ' + currentIndex + ' находится минимальный элемент: ' + minValue);
}
console.log('Отсортированный массив: ' + usersByDay);