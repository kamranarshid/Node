const geoCode = require("./utils/mapbox")
const getWeatherDetails = require("./utils/weather-api")

const address = process.argv[2]

if(!address){
        console.log("Please enter city")

}else{

        
        geoCode(address, (error, { longitude, latitude, placeName } ) => {
        if(error){
                        console.log("Error:",error)
                
        }else{
                console.log("You are requesting:",placeName)
                        getWeatherDetails(longitude,latitude, (error, { description ,temperature, precip }) => {
                                if(error){
                                        console.log("Weather Error:", error) 
                                }else{
                                
                                        console.log("Weather response:", "Weather is '"  +description +"' having Temperature '"+ temperature +"' possibility of rain is: "+ precip)
                                }
                        })
        } 

        

        
        })
}


