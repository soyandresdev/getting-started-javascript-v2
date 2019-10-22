// Coercion: boolean

// Falsy
/*
    ''
    0, -0
    null
    NaN
    false
    undefined
*/

// Truthy

/*
    'foo'
    23
    {a:1}
    [1,3]
    true
    function(){}
    ...
*/
// HTML Element
var studentsInputElem = {
  value: "17"
};
var newStudents = ["andres", "felipe", "mark"];

if (studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}

while (newStudents.length) {
  enrollStudent(newStudents.pop());
}
