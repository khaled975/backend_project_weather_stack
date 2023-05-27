const express = require("express")
const app=express()
const path = require("path")

const viewsPath = path.join(__dirname,"../tem1/views")
app.set("views",viewsPath)



 const x = path.join(__dirname,"../puplic")
app.use(express.static(x))

app.set('view engine', 'hbs');

const port=3000
app.get("/",(req,res)=>{
    res.render("index",{
        title:"HOME PAG",
        desc:"this is our home page",
    }) 
}) 


const location=require("./methods/location")
const weather = require("./methods/weather")
app.get('/weather',(req,res)=>{
    if(! req.query.address){
        return res.send({error:"you must provide an address"})
    }
    location(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        } 
        weather(data.Latitude,data.longitude,(error,weatherData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:weatherData,
                location:req.query.address
            })
        })
    })

})





app.listen(port,()=>{
    console.log("it's ok");
}) 