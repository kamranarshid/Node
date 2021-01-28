const request = require('postman-request')
const postMaster = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=562f9b5a83f080e5e0f02acb136917ff&%20query=islamabad"


request({ url: url} , (error, response)=>{
        const data = JSON.parse(response.body)
        console.log(data.current)
})
//http://api.weatherstack.com/current?access_key=562f9b5a83f080e5e0f02acb136917ff&%20query=islamabad