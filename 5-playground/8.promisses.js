const doWorkPromise = new Promise ( (resolve, reject)=>{
    setTimeout ( ()=>{
        //resolve([7,6,5,])
        reject('Thing Went wrong')
    }, 2000)
})

doWorkPromise.then( (result)=>{
    console.log("Success", result)    
}).catch( (error)=>{
    console.log("Error", error)

})



