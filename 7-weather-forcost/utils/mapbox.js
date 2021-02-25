const request = require('postman-request')

const geoCode = (address, callback)=>{

    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURI(address) + ".json?&access_token=YoUR TOKEN"

    request( {url, json: true} , (error, {body}) => {
            if(error){
                    callback("Unable to connect to service of mapbox", undefined)
            }else if(body.features.length === 0){
                    callback("There is an issue with your request",undefined)
            }else{
                    callback(undefined, {
                            latitude: body.features[0].center[0],
                            longitude: body.features[0].center[1],
                            placeName: body.features[0].place_name
                    })                        
            }

    })

}
module.exports = geoCode