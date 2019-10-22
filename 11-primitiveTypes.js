// Three Pillars of JS
// 1. Types / Coercion
// 2. Coverting Types
// 3. Checking Equality

// In javascript, everything is an object
// False

// Undefined
// string
// number
// boolean
// object
// symbol
// null?
// function?
// array?

var v;
typeof v; // undefined
v = "1";
typeof v; // string
v = 2;
typeof v; // number
v = true;
typeof v; // boolean
v = {};
typeof v; // object
v = Symbol();
typeof v; // symbol
typeof doesntExist; // undefined
v = null;
typeof v; // object OOPS!
v = function() {};
typeof v; // function hmmmm ?
v = [1, 2, 3];
typeof v; // object hmmmm ?
