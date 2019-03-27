/*
// console.log(arguments);
console.log(arguments[0] == exports)
console.log(arguments[1] == require)
console.log(arguments[2] == module)
console.log(arguments[3] == __filename)
console.log(arguments[4] == __dirname)
var a = {}
var b = {}
console.log(a == b)
console.log(__dirname,__filename)
*/
require("./test.js")
console.log(arguments)
console.log(arguments[2])