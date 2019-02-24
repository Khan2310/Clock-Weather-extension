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
  element1.style.backgroundImage = `url(./morning/Atmosphere/${imgId})`;
}

// function showGlobalWether(weatherValue) {
//   console.log(weatherValue);
//   document.getElementById("weeather").innerHTML = weatherValue;
// }
