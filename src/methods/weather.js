const request = require("request")

 const weather = (Latitude,longitude,callback)=>{
    
    const url="http://api.weatherapi.com/v1/current.json?key=e94fc45379c04670b37101111231205&q=" + longitude + "," + Latitude

    request({url,json:true},(error,response)=>{
        if(error){
            callback("there is an error",undefined)
        }else if (response.body.error){
            callback(response.body.error.message,undefined)
        }else{
            callback(undefined,response.body.location.name + " " + response.body.current.condition.text + " it is " + response.body.current.temp_c)

        }
    })
}

module.exports=weather