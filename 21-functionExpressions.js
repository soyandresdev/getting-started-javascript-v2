var clickHandler = function (params) {
  //
}

var keyHandler = function keyHandler(params) {
  //
}

// IIFEs
// IIFE pattern to create immediately invoked function expressions.


var teacher = "Kyle";

;(function anotherTeacher() {
  var teacher = "Suzy"
  console.log(teacher) // 1- Suzy
})();

console.log(teacher) // 2- Kyle
