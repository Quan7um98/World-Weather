let searchBtn = document.getElementById('searchBtn');
let inputCity = document.getElementById('city');
const apiKey = 'f1831d5a052c5e8f97325cfe60835ff3'

searchBtn.addEventListener("click", function() {
    console.log(inputCity.value)
    let currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}`; 
    let forcast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity.value}&appid=${apiKey}`
    console.log(forcast)
    fetch(currentWeather).then(function (response) {
        console.log(response.status);
        if (response.status !== 200) {
            alert('Error not a city')
        }
        return response.json();
    }).then(function (data) {
    // console.log(data)
        displayWeather(data)
    })
    fetch(forcast).then(function (response) {
        console.log(response.status)
        if (response.status !== 200) {
            alert('Error: forcast error')
        }
        return response.json();
    }).then(function (data) {
        console.log(data);
        displayForcast(data);
    })
})

function displayWeather(data) {
    const currentWeatherDiv = document.getElementById('current-weather');
    const description = data.weather[0].description;
    const temp = (data.main.temp - 273.15).toFixed(1)
    const wind = data.wind.speed;
    currentWeatherDiv.innerHTML = `
    <h2>${data.name}</h2>
    <p>${description}</p>
    <p>Temperature: ${temp}°C</p>
    <p>Wind Speeds: ${wind} MPH</p>
    `
};

function displayForcast(data) {
    const ForcastDiv1 = document.getElementById('day1');
    const date1 = data.list[0].dt_txt;
    const decription1 = data.list[0].weather[0].description;
    const temp1 = (data.list[0].main.temp - 273.15).toFixed(1);
    const wind1 = data.list[0].wind.speed;
    ForcastDiv1.innerHTML = `
    <h4>Date: ${date1}</h4>
    <p>Description: ${decription1}</p>
    <p>Temp: ${temp1}°C </p>
    <p>Wind Speed: ${wind1}MPH</p>`

    const ForcastDiv2 = document.getElementById('day2');
    const date2 = data.list[8].dt_txt;
    const decription2 = data.list[8].weather[0].description;
    const temp2 = (data.list[8].main.temp - 273.15).toFixed(1);
    const wind2 = data.list[8].wind.speed;
    ForcastDiv2.innerHTML = `
    <h4>Date: ${date2}</h4>
    <p>Description: ${decription2}</p>
    <p>Temp: ${temp2}°C </p>
    <p>Wind Speed: ${wind2}MPH</p>`

    const ForcastDiv3 = document.getElementById('day3');
    const date3 = data.list[16].dt_txt;
    const decription3 = data.list[16].weather[0].description;
    const temp3 = (data.list[16].main.temp - 273.15).toFixed(1);
    const wind3 = data.list[16].wind.speed;
    ForcastDiv3.innerHTML = `
    <h4>Date: ${date3}</h4>
    <p>Description: ${decription3}</p>
    <p>Temp: ${temp3}°C </p>
    <p>Wind Speed: ${wind3}MPH</p>`

    const ForcastDiv4 = document.getElementById('day4');
    const date4 = data.list[24].dt_txt;
    const decription4 = data.list[24].weather[0].description;
    const temp4 = (data.list[24].main.temp - 273.15).toFixed(1);
    const wind4 = data.list[24].wind.speed;
    ForcastDiv4.innerHTML = `
    <h4>Date: ${date4}</h4>
    <p>Description: ${decription4}</p>
    <p>Temp: ${temp4}°C </p>
    <p>Wind Speed: ${wind4}MPH</p>`

    const ForcastDiv5 = document.getElementById('day5');
    const date5 = data.list[32].dt_txt;
    const decription5 = data.list[32].weather[0].description;
    const temp5 = (data.list[32].main.temp - 273.15).toFixed(1);
    const wind5 = data.list[32].wind.speed;
    ForcastDiv5.innerHTML = `
    <h4>Date: ${date5}</h4>
    <p>Description: ${decription5}</p>
    <p>Temp: ${temp5}°C </p>
    <p>Wind Speed: ${wind5}MPH</p>`
}