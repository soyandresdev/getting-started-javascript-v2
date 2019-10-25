/**
 * Scope/ Closured
 * - Nested Scope
 * - Closure
 */
// Scope: where to look for things
var x = 32;
console.log(y)

var teacher = "kyle"

function otherClass() {
  teacher = "Suzy"
  topic = "react"
  console.log('Welcome')
}

otherClass() // Welcome

console.log(teacher) // Suzy
console.log(topic) // react

// Scope local

function isStudentUser() {
	const isStudent = true;
	console.log(isStudent);
}

isStudentUser(); // true
console.log(isStudent); // isStudent is not defined

// Scope Global
const isStudent = true;
function isStudentUser() {
	console.log(isStudent);
}

isStudentUser(); // true
console.log(isStudent); // true