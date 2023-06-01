let expectedUsers = 1000;
let usersByDay = [1200, 800, 1100, 950, 1300, 700, 900, 1250, 600, 1400, 1100, 900, 800, 1100, 1200, 1300, 950, 810, 1500, 1100, 1200, 1000, 1300, 1200, 800, 1100, 1010, 900, 1000, 1050];
let totalUsers = 0;
let minUsers = expectedUsers - 300;
let badDays = [];
for (let i = 0; i < usersByDay.length; i++) {
  totalUsers += usersByDay[i];
  if (usersByDay[i] < minUsers) {
    badDays[i] = expectedUsers - usersByDay[i];
  } else {
    badDays[i] = 0;
  }
}
let averageUsers = totalUsers / usersByDay.length;
console.log(`Средняя посещаемость: ${averageUsers}`);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
console.log(`Количество плохих дней: ${badDays.filter(day => day > 0).length}`);