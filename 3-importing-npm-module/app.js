const chalk = require("chalk")
const boldUnderline = chalk.underline.yellow;
const validator = require('validator')

const notefile = require("./note")

const msg = notefile("Get Notes form note js file")

console.log(chalk.green(msg))

console.log(chalk.blue.bgRed("kamran"))
console.log(boldUnderline("This is bold and underlined green text!"));

console.log(validator.isEmail("kamran@gmail.com"))
console.log(validator.isURL("www.daraz.com"))

// const name = require("./utility.js")

// // const name = "Kamran Arshad"
// const sum = name(1,1)

// console.log(sum);