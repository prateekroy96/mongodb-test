const fs = require("fs");
function randomNumber(min, max, decimal) {
  let number = Math.random() * (max - min) + min;
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}
let students = [];
let classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let sections = ["A", "B", "C", "D", "E"];
for (let i = 0; i < 6000; i++) {
  students.push({
    name: "student_" + i,
    class: classes[i % 12],
    section: sections[i % 5],
  });
}
console.log(students[234]);
let data = JSON.stringify(students);
fs.writeFileSync("./students.json", data);
