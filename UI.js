class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.weatherDesc = document.getElementById("weather-description");
    this.img = document.getElementById("img-icon");
    this.temp = document.getElementById("temperature");
    this.feelsLike = document.getElementById("feelsLike");
    this.humidity = document.getElementById("humidity");
    this.wind = document.getElementById("wind");
    this.threeDate = document.getElementById('threeDate')
    this.threeDesc = document.getElementById('threeDesc')
    this.threeTemp = document.getElementById('threeTemp')
    this.threeIcon = document.getElementById('threeIcon')
    this.threeWind = document.getElementById('threeWind')

    this.threeDate2 = document.getElementById('threeDate2')
    this.threeDesc2 = document.getElementById('threeDesc2')
    this.threeTemp2 = document.getElementById('threeTemp2')
    this.threeIcon2 = document.getElementById('threeIcon2')
    this.threeWind2 = document.getElementById('threeWind2')

    this.threeDate3 = document.getElementById('threeDate3')
    this.threeDesc3 = document.getElementById('threeDesc3')
    this.threeTemp3 = document.getElementById('threeTemp3')
    this.threeIcon3 = document.getElementById('threeIcon3')
    this.threeWind3 = document.getElementById('threeWind3')
  }
// UI for Current weather
  paint(weather) {
    this.location.textContent = weather.name;
    this.weatherDesc.textContent = `Current conditions: ${weather.weather[0].description}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${Math.round(weather.main.feels_like)} °F`;
    this.temp.textContent = `Temperature: ${Math.round(weather.main.temp)} °F`;
    this.wind.textContent = `Wind: ${Math.round(weather.wind.speed)} MP/H`;
    this.img.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
  }

  // UI for forecasted weather
  paint2(forecast){
    this.threeDate.textContent = new Date(forecast.list[4].dt*1000).toDateString();
    this.threeDesc.textContent = forecast.list[4].weather[0].description
    this.threeTemp.textContent = `Temperature: ${Math.round(forecast.list[4].main.temp)}°F`
    this.threeIcon.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`);
    this.threeWind.textContent = `Wind: ${Math.round(forecast.list[4].wind.speed)} MP/H`


    this.threeDate2.textContent = new Date(forecast.list[12].dt*1000).toDateString();
    this.threeDesc2.textContent = forecast.list[12].weather[0].description
    this.threeTemp2.textContent = `Temperature: ${Math.round(forecast.list[12].main.temp)}°F`
    this.threeIcon2.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[12].weather[0].icon}@2x.png`);
    this.threeWind2.textContent = `Wind: ${Math.round(forecast.list[12].wind.speed)} MP/H`

    this.threeDate3.textContent = new Date(forecast.list[20].dt*1000).toDateString();
    this.threeDesc3.textContent = forecast.list[20].weather[0].description
    this.threeTemp3.textContent = `Temperature: ${Math.round(forecast.list[20].main.temp)}°F`
    this.threeIcon3.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[20].weather[0].icon}@2x.png`);
    this.threeWind3.textContent = `Wind: ${Math.round(forecast.list[20].wind.speed)} MP/H`
  }
}
