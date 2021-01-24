const fs = require('fs')

const readData = fs.readFileSync('1-json.json')
const jsonRead = readData.toString();
const jsonUser = JSON.parse(jsonRead)

jsonUser.name = "Kamran"
jsonUser.age = "40"

const writeData = JSON.stringify(jsonUser)
fs.writeFileSync('1-json.json',writeData)


