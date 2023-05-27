const request = require("request")

 const location = (place,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1Ijoia2hhbGVkOTc1IiwiYSI6ImNsaGwyZzBxMTBsdG4zZXMxMWJvZzd1ajUifQ.2ksg-dfOgjPzmjNGhe16uw'
    
    request({url,json:true},(error,response)=>{
        
        if(error){
            callback("there is an error",undefined)
        }else if (response.body.message){
            callback(response.body.message,undefined)
        }else if (response.body.features.length==0){
                callback("the location isn't found",undefined)
        }else{
            callback(undefined,{Latitude:response.body.features[0].center[0],longitude: response.body.features[0].center[1]})
        }
    })
}

module.exports=location