let expectedUsers = 1000;
let averageUsers = 0; 
let usersByDay = [812, 1360, 657, 1247]; 
averageUsers = usersByDay.reduce((sum, current) => sum + current) / usersByDay.length; // перезаписываем значение averageUsers
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}