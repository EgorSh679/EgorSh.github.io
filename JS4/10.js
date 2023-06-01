usersByDay = [1217, 1000, 950, 1150, 600, 980, 1210, 1340, 800, 1325, 700, 730, 910, 1120, 690, 1254, 1005, 1280, 555, 1040, 940, 1275, 805, 1220, 920, 600, 1100, 1212, 1300, 1208]; 
totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}
averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);
if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}