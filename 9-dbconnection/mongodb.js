const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {

    if(error){
        return console.log("unable to connect")
    }
    const db = client.db(databaseName)


    db.collection('task_managment').deleteMany({
        Task_status: "Done"  
    }).then( (result) =>{
            console.log(result)
    }).catch( (error) => {
            console.log(error)
    })


    // db.collection("task_manager").insertOne({
    //     task_name:"Leadership Reports",
    //     task_status: "false"
    // }, (error, result) =>{
    //         if (error){
    //             console.log('There is some error')
    //         }
    //         console.log(result.ops)
    // })


//     db.collection("task").insertMany([
//         {
//             name: "go office",
//             age: "9Oclocl"
//         },
//         {
//             name: "lunch",
//             age: "2oclock"
//         },
//         {
//             name: "off",
//             age: "t6oclock"
//         },
//     ], (error, result) => {
//         if (error){
//         console.log('There is some error')
//         }

//         console.log(result.ops)

//     })
 })