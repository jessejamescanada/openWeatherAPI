class UI {
  constructor() {
    this.location = document.getElementById("location");
    this.weatherDesc = document.getElementById("weather-description");
    this.img = document.getElementById("img-icon");
    this.temp = document.getElementById("temperature");
    this.feelsLike = document.getElementById("feelsLike");
    this.humidity = document.getElementById("humidity");
    this.wind = document.getElementById("wind");
    this.fiveDate = document.getElementById('fiveDate')
    this.fiveDesc = document.getElementById('fiveDesc')
    this.fiveTemp = document.getElementById('fiveTemp')
    this.fiveIcon = document.getElementById('fiveIcon')
    this.fiveWind = document.getElementById('fiveWind')

    this.fiveDate2 = document.getElementById('fiveDate2')
    this.fiveDesc2 = document.getElementById('fiveDesc2')
    this.fiveTemp2 = document.getElementById('fiveTemp2')
    this.fiveIcon2 = document.getElementById('fiveIcon2')
    this.fiveWind2 = document.getElementById('fiveWind2')

    this.fiveDate3 = document.getElementById('fiveDate3')
    this.fiveDesc3 = document.getElementById('fiveDesc3')
    this.fiveTemp3 = document.getElementById('fiveTemp3')
    this.fiveIcon3 = document.getElementById('fiveIcon3')
    this.fiveWind3 = document.getElementById('fiveWind3')
  }

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

  paint2(forecast){
    this.fiveDate.textContent = new Date(forecast.list[4].dt*1000).toDateString();
    this.fiveDesc.textContent = forecast.list[4].weather[0].description
    this.fiveTemp.textContent = `Temperature: ${Math.round(forecast.list[4].main.temp)}°F`
    this.fiveIcon.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`);
    this.fiveWind.textContent = `Wind: ${Math.round(forecast.list[4].wind.speed)} MP/H`


    this.fiveDate2.textContent = new Date(forecast.list[12].dt*1000).toDateString();
    this.fiveDesc2.textContent = forecast.list[12].weather[0].description
    this.fiveTemp2.textContent = `Temperature: ${Math.round(forecast.list[12].main.temp)}°F`
    this.fiveIcon2.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[12].weather[0].icon}@2x.png`);
    this.fiveWind2.textContent = `Wind: ${Math.round(forecast.list[12].wind.speed)} MP/H`

    this.fiveDate3.textContent = new Date(forecast.list[20].dt*1000).toDateString();
    this.fiveDesc3.textContent = forecast.list[20].weather[0].description
    this.fiveTemp3.textContent = `Temperature: ${Math.round(forecast.list[20].main.temp)}°F`
    this.fiveIcon3.setAttribute('src', `http://openweathermap.org/img/wn/${forecast.list[20].weather[0].icon}@2x.png`);
    this.fiveWind3.textContent = `Wind: ${Math.round(forecast.list[20].wind.speed)} MP/H`
  }
}
