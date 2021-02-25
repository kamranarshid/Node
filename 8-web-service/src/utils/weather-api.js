const request = require('postman-request')

const weatherApplication = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=db0fd25d83d83e5bc74c4f6a23b702f4&%20query="+ latitude +","+ longitude  +"&umits=m"

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

