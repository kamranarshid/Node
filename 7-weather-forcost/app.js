const request = require('postman-request')
const postMaster = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=562f9b5a83f080e5e0f02acb136917ff&%20query=islamabad&units=f"


request({ url: url , json: true} , (error, response)=>{
        ///console.log(response.body.current)

        console.log(response.body.current.weather_descriptions[0] +". Its currently "+ response.body.current.temperature +" degree our there is "+response.body.current.precip+" %  chance of rain")
})
//http://api.weatherstack.com/current?access_key=562f9b5a83f080e5e0f02acb136917ff&%20query=islamabad