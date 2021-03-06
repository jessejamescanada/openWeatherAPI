class Weather {
  constructor(city) {
    this.apiKey = "f54198238601ec13dd56118f61a7a39b";
    this.city = city;
  }

  async getWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`);

    const data = await res.json();

    console.log(data);
    return data;
  }

  // change location
  changeLocation(city) {
    this.city = city;

  }
}
