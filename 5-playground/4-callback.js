


const doWorkCallBAck = (callback) =>{
    setTimeout (() => {
           callback('This is my error', undefined)
            callback(undefined, [1,2,3])
    },2000)
}

doWorkCallBAck( (error, result) =>{
    if(error){
        console.log(error)
    }

   // console.log(result)

})






















// setTimeout( () => {
//     console.log("two second")
// },2000)

// const addFun = (number1, number2, addNumbers)=>{
//     setTimeout( () =>{
//         addNumbers ( number1 + number2)
//     },2000)
// }
// addFun( 1,2, (sum) => {
//     console.log(sum)
// })
