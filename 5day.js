class Forecast {
  constructor(city, state) {
    this.apiKey = "f54198238601ec13dd56118f61a7a39b";
    this.city = city;
    this.state = state;
  }

async getForecast() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}&cnt=25&units=imperial`);
  
  const data = await res.json();
  console.log(data);

  return data
}
changeLocation(city, state){
  this.city = city;
  this.state = state;
}

}