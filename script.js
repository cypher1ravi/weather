const API_KEY = '2dfea15052msh5556fce1e61f501p17d012jsn47690de4e772';
const API_HOST = 'weatherapi-com.p.rapidapi.com';
const API_URL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
};

const getweather = async (city) => {
    try {
        cityName.textContent = city;
        const response = await fetch(API_URL + encodeURIComponent(city), options);
        const data = await response.json();
        const { current, location } = data;

        // Update DOM elements using an object for cleaner code
        const updates = {
            temp: current.temp_c,
            min_temp: current.temp_c - 2,
            max_temp: current.temp_c + 2,
            pressure: current.pressure_mb,
            visibility: current.vis_km * 1000,
            humidity: current.humidity,
            cloud_pct: current.cloud,
            feels_like: current.feelslike_c,
            dew_point: current.dewpoint_c,
            wind_speed: current.wind_kph,
            wind_deg: current.wind_degree,
            sunrise: location.localtime.split(" ")[1],
            sunset: location.localtime.split(" ")[1]
        };

        Object.entries(updates).forEach(([key, value]) => {
            document.getElementById(key).textContent = value;
        });
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
});

getweather("Singrauli");
