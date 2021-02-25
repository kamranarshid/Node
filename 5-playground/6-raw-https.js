const http = require('http')

const url = "http://api.weatherstack.com/current?access_key=db0fd25d83d83e5bc74c4f6a23b702f4&%20query=islamabad&umits=m"

const request = http.request(url, (response) => {
    let data = ' '
    response.on('data',(chunks) => {
        data = data + chunks.toString()
        
    })

    response.on('end',() =>{
        const responseBody = JSON.parse(data)

        console.log(responseBody.location)
    })
})

request.on('error',(error) => {
    console.log("Error:"+ error)
})
request.end()


 