let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);
for (let currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++) {
  let minValue = usersByDay[currentIndex];
  for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      let swap = usersByDay[currentIndex];
      usersByDay[currentIndex] = usersByDay[j];
      usersByDay[j] = swap;
      console.log('Меняю местами ' + swap + ' и ' + usersByDay[currentIndex]);
      console.log('Массив сейчас: ' + usersByDay);
    }
  }
  console.log('На позиции ' + currentIndex + ' находится минимальный элемент: ' + minValue);
}