// The way to convert from one type to another: coercion

// Coercion: String concatenation (number to string)

var msg1 = "There are ";
var numStudents = 15;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// There are 15students.

// Number + Number = Number
// Number + String = String
// String + Number = String
// String + String = String

function addAstudent(numS) {
  return numS + 1;
}
// studentsInputElem.value is String '17'
addAstudent(Number(studentsInputElem.value));
// 17
