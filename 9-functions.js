// Functions
function greetStudent(student){
  console.log(
    `Hello, ${student.name}`
  )
}

function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed
}

var left = timeRemaining(42, 240) // 198
