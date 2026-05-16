let submit = document.getElementById("btn")
let feelsLike = document.getElementById("like")
let temperature = document.getElementById("f")
let weather = document.getElementById("weather")
let percent = document.getElementById("prc")
let kmh = document.getElementById("km")
let pha = document.getElementById("phh")
let uvv = document.getElementById("uvv")
let wt = document.getElementById("wt")

async function GetData() {
    let search = document.getElementById("inpt")
    console.log(search.value)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fbf772565d274d0db06101942260905&q=${search.value}&aqi=yes`)

    const data = await response.json()
    console.log(data)
    
    
    let temp_f = data.current.temp_f
    console.log(temp_f)

    temperature.textContent = temp_f

    let temp_c = data.current.temp_c
    console.log(temp_c)

    feelsLike.textContent = temp_c

    let icon = data.current.condition.icon
    console.log(icon)

    weather.src = icon

    let text = data.current.condition.text
    console.log(text)

    wt.textContent = text
    
    let humidity = data.current.humidity
    console.log(humidity)
    
    prc.textContent = humidity


    let wind_kph = data.current.wind_kph
    console.log(wind_kph)

    kmh.textContent = wind_kph

    let pressure_mb = data.current.pressure_mb
    console.log(pressure_mb)

    pha.textContent = pressure_mb

    let uv = data.current.uv
    console.log(uv)

    uvv.textContent = uv
}

submit.addEventListener("click", GetData)


// https://github.com/giorgibaramidze777/weather-app.git
// git config --global user.name "giorgibaramidze777"
// git config --global user.email "giorgibaramidze762@gmail.com"

// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/giorgibaramidze777/weather-app.git
// git push -u origin main