
//object property shorthand
const nam = "kamran"
const age = 38

const user = {
    nam,
    age,
    location:"abc"
}

console.log(user)

// object destructuring 

const product = {
    label : "This is label",
    price: 300,
    stock: 20,
    saleProduct: undefined
}

//const label = product.label
// const {label:productLabel, price} = product

// console.log(productLabel)

const myFunction = (arg1, {label, price} = {}) => {
    console.log(label)
}
myFunction()


const greet = (name = 'User') =>{
    console.log('Hello '+ name + '!')
}

greet("kamran")
greet()