$(document).ready(function() {

  const inputVal = $("#findCity")
  const searchBtn = $("#searchBtn")
  const city = $("#cityOutput")
  const wind = $("#wind")
  const temp = $("#temp")
  const humidity = $("#humidity")

  let savedCity = localStorage;
  let cities = [];

  const apiKey = "16774bec82acab94656391e09d4e90a2";
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


  // Button feature when you search for a city
inputVal.on("click", function() {
  let searchCity = $("#findCity").val();
  $("#findCity").val("");


fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey),
.then(res => res.json())
.then(data =>{
  let cityName = data['name']
  let temperature = data["main"]["temp"]
  let windSpd = data["wind"]["speed"]
  let humidity = data

  city.innerHtml = <span>${cityName}</span>
  temperature.innerHtml = "Temperature:"
}
});

  // let cityLoc = "";
  // let cityLon = "";
  // let cityLat = "";

  

  // Current/future conditions
  
  // Add searches to history
  
  // Display city name, date, and temperature, humidity, wind speed, and icon representing weather
  
  // Grabbing info from API

  // Save searches to local storage

  function saveSearches () {
    savedCity.setItem()
  }

  // Local Storage Info
  let savedCities = json.parse(localStorage.getItems("items")) || [];
  if (items.length > 0) {
    weatherFunc(items[items.length - 1]);
  }
  for (var = 0; i < items.length; i++) {
    cityRow(items[i]);
  }
  function cityRow(text) {
    let listCity = $("<li>").addClass("list")
  }



})




// Additional Resources Used
// https://www.w3schools.com/pHP/func_var_empty.asp