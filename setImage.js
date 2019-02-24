var today = new Date();
var hour = today.getHours();
var randomPic;
var numberOfFiles = 3;

function returnRandomPicNum(numberOfFiles) {
  return Math.floor(Math.random() * numberOfFiles + 1);
}

randomPic = returnRandomPicNum(numberOfFiles);

// setImage(randomPic, hour);

function setImage(rP, h, weatherNameParam) {
  var img = "image";
  var num = rP;
  var weatherName = weatherNameParam;

  if (num > 0 && num < 10) {
    img = img + "0";
  }

  var element1 = document.getElementById("backgroundImage");

  var imgId = img + num + ".jpg";

  if (h >= 5 && h < 12) {
    //morning time
    if (weatherName === "Atmosphere") {
      element1.style.backgroundImage =
        "url(" + "morning/Atmosphere/" + imgId + ")";
    } else if (weatherName === "Thunderstorm") {
      element1.style.backgroundImage =
        "url(" + "morning/Thunderstorm/" + imgId + ")";
    } else if (weatherName === "Drizzle") {
      element1.style.backgroundImage =
        "url(" + "morning/Drizzle/" + imgId + ")";
    } else if (weatherName === "Rain") {
      element1.style.backgroundImage = "url(" + "morning/Rain/" + imgId + ")";
    } else if (weatherName === "Snow") {
      element1.style.backgroundImage = "url(" + "morning/Snow/" + imgId + ")";
    } else if (weatherName === "Clear") {
      element1.style.backgroundImage = "url(" + "morning/Clear/" + imgId + ")";
    } else if (weatherName === "Clouds") {
      element1.style.backgroundImage = "url(" + "morning/Clouds/" + imgId + ")";
    } else {
      element1.style.backgroundImage = "url(errorimage.jpg)";
    }
  } else if (h >= 12 && h < 19) {
    //noon time
    if (weatherName === "Atmosphere") {
      element1.style.backgroundImage =
        "url(" + "noon/Atmosphere/" + imgId + ")";
    } else if (weatherName === "Thunderstorm") {
      element1.style.backgroundImage =
        "url(" + "noon/Thunderstorm/" + imgId + ")";
    } else if (weatherName === "Drizzle") {
      element1.style.backgroundImage = "url(" + "noon/Drizzle/" + imgId + ")";
    } else if (weatherName === "Rain") {
      element1.style.backgroundImage = "url(" + "noon/Rain/" + imgId + ")";
    } else if (weatherName === "Snow") {
      element1.style.backgroundImage = "url(" + "noon/Snow/" + imgId + ")";
    } else if (weatherName === "Clear") {
      element1.style.backgroundImage = "url(" + "noon/Clear/" + imgId + ")";
    } else if (weatherName === "Clouds") {
      element1.style.backgroundImage = "url(" + "noon/Clouds/" + imgId + ")";
    } else {
      element1.style.backgroundImage = "url(errorimage.jpg)";
    }
  } else {
    //night time
    if (weatherName === "Atmosphere") {
      element1.style.backgroundImage =
        "url(" + "night/Atmosphere/" + imgId + ")";
    } else if (weatherName === "Thunderstorm") {
      element1.style.backgroundImage =
        "url(" + "night/Thunderstorm/" + imgId + ")";
    } else if (weatherName === "Drizzle") {
      element1.style.backgroundImage = "url(" + "night/Drizzle/" + imgId + ")";
    } else if (weatherName === "Rain") {
      element1.style.backgroundImage = "url(" + "night/Rain/" + imgId + ")";
    } else if (weatherName === "Snow") {
      element1.style.backgroundImage = "url(" + "night/Snow/" + imgId + ")";
    } else if (weatherName === "Clear") {
      element1.style.backgroundImage = "url(" + "night/Clear/" + imgId + ")";
    } else if (weatherName === "Clouds") {
      element1.style.backgroundImage = "url(" + "night/Clouds/" + imgId + ")";
    } else {
      element1.style.backgroundImage = "url(errorimage.jpg)";
    }
  }
}

// function showGlobalWether(weatherValue) {
//   console.log(weatherValue);
//   document.getElementById("weeather").innerHTML = weatherValue;
// }
