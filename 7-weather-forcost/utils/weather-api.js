const request = require('postman-request')

const weatherApplication = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=Your Key&%20query="+ latitude +","+ longitude  +"&umits=m"

    request ({url, json: true}, (error, {body}) => {
        if(error){
            callback("There is error while connecting to api", undefined)
        }else if(body.error){
            callback("Invalid arguments supplied", undefined)
        }else{

            callback(undefined, {
                description: body.current.weather_descriptions[0], 
                temperature: body.current.temperature,
                precip: body.current.precip
            })
        }

    })
}
module.exports = weatherApplication

