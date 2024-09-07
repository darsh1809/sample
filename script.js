const apiKey = 'c699fdf145183536978d361683bc6cfd';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=surat';


document.getElementById('searchButton').addEventListener('click', () => { const location = document.getElementById('locationInput').value;
if (location) { fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
const weatherInfo = document.getElementById('weatherInfo'); weatherInfo.innerHTML = `
<h2>Weather in ${data.name}, ${data.sys.country}</h2>
<p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Humidity: ${data.main.humidity}%</p>

`;
 
})
.catch(error => {
console.error('Error fetching weather data:', error);
alert('An error occurred while fetching weather data. Please try again.');
});
} else {
alert('Please enter a location.');

}
});
