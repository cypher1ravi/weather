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

const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => resolve(`${position.coords.latitude},${position.coords.longitude}`),
                error => reject(error)
            );
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
};

const getweather = async (location) => {
    try {
        const response = await fetch(API_URL + encodeURIComponent(location), options);
        const data = await response.json();
        const { current, location: locationData } = data;

        // Update city name
        document.getElementById('cityName').textContent = locationData.name;

        // Update DOM elements
        const updates = {
            temp: current.temp_c,
            min_temp: Math.round(current.temp_c - 2), // Approximation
            max_temp: Math.round(current.temp_c + 2), // Approximation
            pressure: current.pressure_mb,
            visibility: current.vis_km * 1000,
            humidity: current.humidity,
            cloud_pct: current.cloud,
            feels_like: current.feelslike_c,
            wind_speed: current.wind_kph,
            wind_deg: current.wind_degree,
            // Note: sunrise and sunset are not available in the current data
        };

        Object.entries(updates).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = value;
            } else {
                console.warn(`Element with id '${key}' not found`);
            }
        });

        console.log('Weather data updated:', updates);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
};

// Modify the event listener
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
});

// Add a function to get user location and fetch weather
const getUserLocationWeather = async () => {
    try {
        const userLocation = await getUserLocation();
        await getweather(userLocation);
    } catch (error) {
        console.error("Error getting user location:", error);
        // Fallback to default location
        getweather("Singrauli");
    }
};

// Call getUserLocationWeather on page load
getUserLocationWeather();
