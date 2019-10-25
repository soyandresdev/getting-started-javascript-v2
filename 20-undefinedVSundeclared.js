/**
 * Undefined vs Undeclared
 */
// Undefined
var a;
console.log(a); //undefined
console.log(typeof a); // undefined

//Null

var b = null;
console.log(b); //null
console.log(typeof b); //object

//Undeclared

console.log(nonDeclaredVariable);

// Uncaught ReferenceError: nonDeclaredVariable is not defined
//    at <anonymous>:1:13

console.log(typeof nonDeclaredVariable); //undefined