$(document).ready(function () {

  // const inputVal = $("#findCity")
  const searchBtn = $("#searchBtn")
  // const city = $("#cityOutput")


  const apiKey = "16774bec82acab94656391e09d4e90a2";
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


  // Button feature when you search for a city
  searchBtn.on("click", function () {
    let searchCity = $("#findCity").val();
    $("#findCity").val("");
    forecast(searchCity);
    weatherFunc(searchCity);

  });

  // searchBtn.keypress(function (event) {
  //   let keyC = (event.keyCode ? event.keyCode : event.which);
  //   // if keycode is 13 (enter/return), it will perform the search function
  //   if (keyC === 13) {
  //     weatherFunc(searchCity);
  //     forecast(searchCity);
  //   }
  // });


  // let cityLoc = "";
  // let cityLon = "";
  // let cityLat = "";

  // Current/future conditions

  // Add searches to history

  // Display city name, date, and temperature, humidity, wind speed, and icon representing weather

  // Grabbing info from API

  // Save searches to local storage

  // function saveSearches() {
  //   savedCity.setItem()
  // }

  // Local Storage Info
  let savedCities = JSON.parse(localStorage.getItem("history")) || [];
  if (savedCities.length > 0) {
    weatherFunc(savedCities[savedCities.length - 1]);
  }
  for (var i = 0; i < savedCities.length; i++) {
    createRow(savedCities[i]);
  }
  function createRow(text) {
    let listCity = $("<li>").addClass("lis-group-item").text(text);
    $(".history").append(listCity);
  }
  $(".history").on("click", "li", function () {
    weatherFunc($(this).text());
    forecast($(this).text());
  })

  function weatherFunc(searchCity) {
    // fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial")
    //   .then(res => res.json())

    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial"
    })
      // Pushes search values that do not exist into the local storage
      .then(function (data) {
        if (savedCities.indexOf(searchCity) === -1) {
          savedCities.push(searchCity);
          localStorage.setItem("history", json.stringify(savedCities));
          createRow(searchCity);
        }
        // clear previous content
        $("#today").empty();

        let title = $("<h4>").addClass("cardHeader").text(data.name + " (" + new Date().toLocaleDateString() + ")");
        let iconcode = data.weather[i].icon;
        var iconUrl = $("<img>").attr("src", "http://openweathermap.org/img/w/" + iconcode + ".png");

        let card = $("<div>").addClass("card");
        let cardBody = $("<div>").addClass("card-body");
        // wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
        let wind = $("<p>").addClass("card-text").text("Wind: " + data.wind.speed + "MPH");
        // main.humidity Humidity, %
        let humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + " %");
        // main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
        let temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " F");
        // coord.lon City geo location, longitude
        let longitude = data.coord.lon;
        let latitude = data.coord.lat;

        // fetch("https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey "&lat=" + lat + "&lon=" + lon + "units=imperial")
        // .then(res => res.json())

        $.ajax({
          method: "GET",
          url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon + "units=imperial",
        })
          .then(function (response) {
            console.log(response);
          })
        title.append(iconUrl)
        cardBody.append(title, temp, humidity, wind);
        card.append(cardBody);
        $("#today").append(card);
        console.log(data);
      })

  }
  function forecast(searchCity) {
    // fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial")
    // .then(function(data) {
    //   console.log(data);
    //   $("#5dayList").html()

    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearch + "&limit=5&appid=" + apiKey + "&units=imperial"
    })

      // Creating and appending the 5 day forecast information
      .then(function (data) {
        console.log(data);

        $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

        //loop to create a new card for 5 days pull data image from search
        for (var i = 0; i < data.list.length; i++) {
  
          }
      })
    }})

      
      // .then(data => console.log(data))
      // .catch(err => alert('Incorrect city name'))







// Additional Resources Used
// https://www.w3schools.com/pHP/func_var_empty.asp
// https://www.toptal.com/developers/keycode/table-of-all-keycodes