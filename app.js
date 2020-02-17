const modal = document.querySelector(".modal");
const changeBTN = document.getElementById("changeLocBTN");
const modalX = document.querySelector(".modalPara");
const modalBTNchange = document.getElementById("modalBTN");
const mInput = document.getElementById("modalInput");
const error = document.querySelector(".error");

const locationErr = document.getElementById("location");
const descErr = document.getElementById("weather-description");
const imgErr = document.getElementById("img-icon");
const tempErr = document.getElementById("temperature");
const feelsErr = document.getElementById("feelsLike");
const humidErr = document.getElementById("humidity");
const windErr = document.getElementById("wind");



const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const forecast = new Forecast(weatherLocation.city)


const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
changeBTN.addEventListener("click", showModal);
modalX.addEventListener("click", closeModal);
window.addEventListener("click", closeModalWindow);
modalBTNchange.addEventListener("click", changeCity);
// get weather on page load
document.addEventListener("DOMContentLoaded", getForecast);

function getWeather() {
  weather
    .getWeather()
    .then(res => {
      console.log(res);
      ui.paint(res);
    })
    .catch(err => (locationErr.textContent = `Oops. That city doesn't exist`));
  descErr.textContent = "";
  imgErr.textContent = "";
  tempErr.textContent = "";
  feelsErr.textContent = "";
  humidErr.textContent = "";
  windErr.textContent = "";
}

 function getForecast(){
   forecast.getForecast()
   .then(res => {
     console.log(res);
     ui.paint2(res);
   })
   .catch(err => console.log(err));
       
   }


// show Modal function
function showModal() {
  modal.style.display = "block";
}

// close modal on X
function closeModal(e) {
  if (e.target === modalX) {
    modal.style.display = "none";
  }
}

// close Modal on window click
function closeModalWindow(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function changeCity(e) {
  city = mInput.value.trim();

  if (mInput.value === "") {
    error.style.display = "block";
    setTimeout(function() {
      error.style.display = "none";
    }, 2000);
    return false;
  } else {
    weather.changeLocation(city);
    forecast.changeLocation(city)
    storage.setLocationData(city);
    

    getWeather();
    getForecast();
    if (e.target === modalBTNchange) {
      modal.style.display = "none";
    }
    mInput.value = "";
  }
}
