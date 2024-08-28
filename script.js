const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '2dfea15052msh5556fce1e61f501p17d012jsn47690de4e772',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then(response => {
            const current = response.current;

            // Populate data in respective cards
            temp.innerHTML = current.temp_c;
            min_temp.innerHTML = current.temp_c - 2; // Placeholder, adjust as needed
            max_temp.innerHTML = current.temp_c + 2; // Placeholder, adjust as needed
            pressure.innerHTML = current.pressure_mb;
            visibility.innerHTML = current.vis_km * 1000; // Convert to meters
            humidity.innerHTML = current.humidity;
            cloud_pct.innerHTML = current.cloud;
            feels_like.innerHTML = current.feelslike_c;
            dew_point.innerHTML = current.dewpoint_c;
            wind_speed.innerHTML = current.wind_kph;
            wind_deg.innerHTML = current.wind_degree;

            // Placeholder values for sunrise/sunset
            sunrise.innerHTML = response.location.localtime.split(" ")[1];
            sunset.innerHTML = response.location.localtime.split(" ")[1];
        })
        .catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
});

getweather("Singrauli");
