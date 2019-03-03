function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
    console.log("check your code");
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;

  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

  var url = "https://api.openweathermap.org/data/2.5/weather?lat=";

  // document.write(lat);
  // document.write(lon);
  var newUrl = buildUrlByLocation(url, lat, lon);
  // document.write(newUrl);
  getWeatherFromOW(newUrl);
}

getLocation();

function buildUrlByLocation(url, lat, lon) {
  url += lat;
  url += "&lon=";
  url += lon;
  url += "&appid=c3170d662b092ff0e486b5171c1d313d";
  return url;
}

function ww(weather) {
  document.getElementById("showWeather").innerHTML = weather;
}

function getWeatherFromOW(url) {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      var weather = data.weather[0].main;
      var weatherId = data.weather[0].id;
      ww(weather);
      var weatherName = checkWeatherType(weatherId);
      setImage(randomPic, hour, weatherName);
      //*******selection procedure of images with respect to weather goes here;

      //***************************************
      // document.write(data.id);
      // document.write(data.name);
      // document.write(data.weather[0].main);
    })
    .catch(function(error) {
      console.log(error);
    });
}
