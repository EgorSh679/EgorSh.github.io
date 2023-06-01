let usersByDay = [4, 5, 1, 3, 2, 6, 7]; 
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  console.log(usersByDay[i]);
  totalUsers += usersByDay[i];
}
console.log(totalUsers);