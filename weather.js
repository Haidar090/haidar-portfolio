const apiKey = "6ecfe15c1ffb53826686d19bcc42548d";

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

searchBtn.addEventListener('click', function() {
  const city = cityInput.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;

      weatherResult.innerHTML = `
        <h3>${data.name}</h3>
        <p>${temp}°C</p>
        <p>${description}</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = `<p>City not found. Try again.</p>`;
    });
});