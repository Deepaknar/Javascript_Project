const apiKey ='7919423d0fb7c87171229fd81cf56932';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';


const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button"); 

const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src =  "/WeatherApp/images/clouds.png"
    }
     else if(data.weather[0].main == 'Clear'){
        weatherIcon.src =  "/WeatherApp/images/clear.png"
    }
     else if(data.weather[0].main == 'Rain'){
        weatherIcon.src =  "/WeatherApp/images/rain.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "/WeatherApp/images/drizzle.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src =  "/WeatherApp/images/mist.png"
    }
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
