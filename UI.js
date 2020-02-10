class UI {
  constructor() {
    this.location = document.getElementById('location')
    this.weatherDesc = document.getElementById('weather-description')
    this.img = document.getElementById('img-icon')
    this.temp = document.getElementById('temperature')
    this.feelsLike = document.getElementById('feelsLike')
    this.humidity = document.getElementById('humidity')
    this.wind = document.getElementById('wind')
  }

  paint(weather) {
    this.location.textContent = weather.name
    this.weatherDesc.textContent = `Current conditions: ${weather.weather[0].description}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} °F`;
    this.temp.textContent = `Temperature: ${weather.main.temp} °F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} MP/H`;
    this.img.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
  }

}