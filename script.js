const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2dfea15052msh5556fce1e61f501p17d012jsn47690de4e772',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            temp.innerHTML = response.temp
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            humidity.innerHTML = response.humidity
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            wind_speed.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
        }
        )
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("singrauli");


const kol = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then(response => {
            temp_kol.innerHTML = response.temp
            max_temp_kol.innerHTML = response.max_temp
            min_temp_kol.innerHTML = response.min_temp
            humidity_kol.innerHTML = response.humidity
            cloud_pct_kol.innerHTML = response.cloud_pct
            feels_like_kol.innerHTML = response.feels_like
            sunrise_kol.innerHTML = response.sunrise
            sunset_kol.innerHTML = response.sunset
            wind_speed_kol.innerHTML = response.wind_speed

        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
kol("kolkata");


const ben = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bengaluru', options)
        .then(response => response.json())
        .then(response => {
            temp_ben.innerHTML = response.temp
            max_temp_ben.innerHTML = response.max_temp
            min_temp_ben.innerHTML = response.min_temp
            humidity_ben.innerHTML = response.humidity
            cloud_pct_ben.innerHTML = response.cloud_pct
            feels_like_ben.innerHTML = response.feels_like
            sunrise_ben.innerHTML = response.sunrise
            sunset_ben.innerHTML = response.sunset
            wind_speed_ben.innerHTML = response.wind_speed

        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
ben("bengaluru");

const del = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
        .then(response => response.json())
        .then(response => {
            temp_del.innerHTML = response.temp
            max_temp_del.innerHTML = response.max_temp
            min_temp_del.innerHTML = response.min_temp
            humidity_del.innerHTML = response.humidity
            cloud_pct_del.innerHTML = response.cloud_pct
            feels_like_del.innerHTML = response.feels_like
            sunrise_del.innerHTML = response.sunrise
            sunset_del.innerHTML = response.sunset
            wind_speed_del.innerHTML = response.wind_speed

        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
del("delhi")

const luck = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
        .then(response => response.json())
        .then(response => {
            temp_luck.innerHTML = response.temp
            max_temp_luck.innerHTML = response.max_temp
            min_temp_luck.innerHTML = response.min_temp
            humidity_luck.innerHTML = response.humidity
            cloud_pct_luck.innerHTML = response.cloud_pct
            feels_like_luck.innerHTML = response.feels_like
            sunrise_luck.innerHTML = response.sunrise
            sunset_luck.innerHTML = response.sunset
            wind_speed_luck.innerHTML = response.wind_speed

        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
luck("lucknow");

const mum = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
        .then(response => response.json())
        .then(response => {
            temp_mum.innerHTML = response.temp
            max_temp_mum.innerHTML = response.max_temp
            min_temp_mum.innerHTML = response.min_temp
            humidity_mum.innerHTML = response.humidity
            cloud_pct_mum.innerHTML = response.cloud_pct
            feels_like_mum.innerHTML = response.feels_like
            sunrise_mum.innerHTML = response.sunrise
            sunset_mum.innerHTML = response.sunset
            wind_speed_mum.innerHTML = response.wind_speed

        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
mum("bengaluru");