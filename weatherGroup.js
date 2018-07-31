function checkWeatherType(weatherId) {
  var weatherType = weatherId;
  var setWeatherGroup;

  if (
    weatherType === 701 ||
    weatherType === 711 ||
    weatherType === 721 ||
    weatherType === 731 ||
    weatherType === 741 ||
    weatherType === 751 ||
    weatherType === 761 ||
    weatherType === 771 ||
    weatherType === 781
  ) {
    setWeatherGroup = "Atmosphere";
  } else if (
    weatherType === 200 ||
    weatherType === 201 ||
    weatherType === 202 ||
    weatherType === 210 ||
    weatherType === 211 ||
    weatherType === 212 ||
    weatherType === 221 ||
    weatherType === 230 ||
    weatherType === 231 ||
    weatherType === 232
  ) {
    setWeatherGroup = "Thunderstorm";
  } else if (
    weatherType === 300 ||
    weatherType === 301 ||
    weatherType === 302 ||
    weatherType === 310 ||
    weatherType === 311 ||
    weatherType === 312 ||
    weatherType === 313 ||
    weatherType === 314 ||
    weatherType === 321
  ) {
    setWeatherGroup = "Drizzle";
  } else if (
    weatherType === 500 ||
    weatherType === 501 ||
    weatherType === 502 ||
    weatherType === 503 ||
    weatherType === 504 ||
    weatherType === 511 ||
    weatherType === 520 ||
    weatherType === 521 ||
    weatherType === 522 ||
    weatherType === 531
  ) {
    setWeatherGroup = "Rain";
  } else if (
    weatherType === 600 ||
    weatherType === 601 ||
    weatherType === 602 ||
    weatherType === 611 ||
    weatherType === 612 ||
    weatherType === 615 ||
    weatherType === 616 ||
    weatherType === 620 ||
    weatherType === 621 ||
    weatherType === 622
  ) {
    setWeatherGroup = "Snow";
  } else if (weatherType === 800) {
    setWeatherGroup = "Clear";
  } else if (
    weatherType === 801 ||
    weatherType === 802 ||
    weatherType === 803 ||
    weatherType === 804
  ) {
    setWeatherGroup = "Clouds";
  } else {
    console.log("condition was not right");
  }
  return setWeatherGroup;
  // setImage(randomPic, hour, setWeatherGroup);
}
