const path = require('path');
const express = require('express')
const hbs = require('hbs');
const { read } = require('fs');
const geoCode = require("./utils/mapbox")
const weatherApplication = require('./utils/weather-api');

const app = express()
const home = path.join(__dirname,'../public')
const templates = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')



app.set('view engine' ,'hbs')
app.set('views' , templates)
hbs.registerPartials(partialsPath)

app.use(express.static(home))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Index',
        name: 'Kamran Arshad 1'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Muhammad Kamran 2'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'About Help',
        name: 'Muhammad Kamran 3'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
        
    }    
        
    geoCode(req.query.address, (error, { longitude, latitude, placeName }  = {})  =>{
        if(error){
            return res.send({
                error: 'You must provide an address!'
            })
        }else{
            weatherApplication(longitude, latitude, (error, {description ,temperature, precip }) => {
                if(error){
                    return res.send({ error })
                }else{
                    return res.send({
                        forcost: description, 
                        temp: temperature,
                        p: precip,
                        cityDetails: placeName
                    })     
                }
            })
        }
    })    

})

app.get('/product',(req, res) =>{

    if(!req.query.search){
      return read.send({
        error:"Error in query"
      })  
    }else{
        console.log(req.query)
        res.send({
            product: []
        })
    }
  
})


app.get('/help/*', (req, res) => {
    res.render('help', {
        title: 'About Help not found',
        name: 'Muhammad Kamran 3'
    })
})

app.get('*',(req, res) => {
    res.render('404' , {
        title:'404 '

    })

})

app.listen(3000 , ()=>{
    console.log("Server is up an running")
})