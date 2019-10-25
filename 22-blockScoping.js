 // Block Scoping

let teacher = "Suzy"";
{
  let teacher = "Andres"";
  console.log(teacher)
}

;(function anotherTeacher() {
  // Block Scoping: LET
  let teacher = "Suzy"
  console.log(teacher)
})();

console.log(teacher) // 2- Kyle

