// Loops
let students =['Andres', 'Marco', 'X']

for (let index = 0; index < students.length; index++) {
  const student = students[index];
  console.log(student)
}

for (const iterator of students) {
  console.log(iterator)
}

while (students.length > 0) {
  let student = students.pop(); // Start Last
  // let student = students.shift(); // Start first
  console.log('Hello,', student)
}