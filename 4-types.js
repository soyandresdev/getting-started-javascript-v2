typeof 42 // number
typeof "42" // string
typeof true // boolean
typeof undefined // undefined
typeof { age: 39 } // "object"
typeof null // "object" !?1?
typeof [1, 2, 3] // "object"

// Operand	Result
// undefined	"undefined"
// null	"object" // This is a bug.
// Boolean value	"boolean"
// Number value	"number"
// String value	"string"
// Function	"function"
// All other values	"object"
