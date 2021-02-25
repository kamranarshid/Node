const mongoose = require('mongoose')
/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kamran:<password>@mongodb-cl1.viycj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
mongoose.connect( 'mongodb://127.0.0.1:27017/user_managment', 
 { 
     useNewUrlParser: true,
     useCreateIndex: true 
})

// mongoose.connect( 'mongodb+srv://kamran:Admin12@$@mongodb-cl1.viycj.mongodb.net/Users?retryWrites=true&w=majority/task_management', 
//  { 
//      useNewUrlParser: true,
//      useCreateIndex: true 
//  })
const user = mongoose.model('user_details',{
        first_name: {
            type: String

        },
        last_name:{
            type: String
        },
        age: {
            type: Number
        }

}) 

const me = new user({
    first_name:"Ali",
    last_name:"Ashger",
    age: 40
})

me.save().then( () =>{
    console.log(me)
}).catch( (error)=>{
    console.log(error)
})