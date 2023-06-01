for (let i = 0; i <= usersByDay.length - 2; i++) {
    let minValue = usersByDay[i];
    for (let j = i + 1; j <= usersByDay.length - 1; j++) {
        if (usersByDay[j] < minValue) {
            minValue = usersByDay[j];
            let swap = usersByDay[i];
            usersByDay[i] = minValue;
            usersByDay[j] = swap;
        }
    }
}
console.log('Отсортированный массив: ' + usersByDay);

let median;
if (usersByDay.length % 2 !== 0) {
    let medianIndex = (usersByDay.length - 1) / 2;
    median = usersByDay[medianIndex];
} else {
    let leftIndex = usersByDay.length / 2 - 1;
    let rightIndex = usersByDay.length / 2;
    median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}

console.log('Медианная посещаемость: ' + median);

if (median / averageUsers < 0.9)

console.log ('Естьподозрения в подтасовках!');
  else

console.log  ('Подозрений в подтасовках нет!');