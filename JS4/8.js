let expectedUsers = 1000;
let usersByDay = [812, 1360, 657, 1247];
let averageUsers = 0;
averageUsers = usersByDay.reduce((sum, current) => sum + current) / usersByDay.length; 
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}
for (let i = 0; i <= usersByDay.length - 1; i++) { 
  console.log(usersByDay[i]); 
}