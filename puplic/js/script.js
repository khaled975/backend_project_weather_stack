const form=document.getElementById("form")
const input=document.getElementById("inp")
const btn=document.getElementById("btn")
const locationF=document.getElementById("location")
const forecastF=document.getElementById("forecast")
const errorF=document.getElementById("error")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(input.value);
    weatherFun()
    form.reset()
})

let weatherFun = async ()=>{
    try{
        const address=document.getElementById("inp").value
        const res = await fetch("http://localhost:3000/weather?address="+address)
        const data = await res.json()
        if(data.error){
            errorF.innerText=data.error
            locationF.innerText=''
            forecastF.innerText=''
        }
        else{
            locationF.innerText="Location: " + data.location
            forecastF.innerText="condition: " + data.forecast
            errorF.innerText=''
        }
    }catch(e){
        console.log(e);
    }

}