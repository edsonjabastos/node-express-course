// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const fs = require("fs");
const os = require("os");

console.log(os);
console.log("eaerr!");
console.log(fs);

const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

console.log(data.items[0], data.items[1]);
console.log(data);
console.log(data.singlePerson);
