import { fetchWeatherData, getStickerUrl } from "./index.js";

let weatherCondition = document.querySelector("#weather-type");
let city = document.querySelector("#city");
let temperature = document.querySelector("#temperature");
let tempUnitToggle = document.querySelector("#toggle");
let feelLike = document.querySelector("#feels-like");
let todaysHigh = document.querySelector("#todays-high");
let humidity = document.querySelector("#humidity");
let giphySticker = document.querySelector("#giphy-sticker");

async function displayWeatherDataOnDom(weatherDataInJson) {
  city.textContent = weatherDataInJson.address;
  weatherCondition.textContent = weatherDataInJson.currentConditions.conditions;

  humidity.textContent = `Humidity :  ${weatherDataInJson.currentConditions.humidity}%`;

  giphySticker.src = await getStickerUrl(
    weatherDataInJson.currentConditions.conditions,
  );

  if (tempUnitToggle.checked === true) {
    // Round the temperatures to nearest whole number
    temperature.textContent = `${Math.round(weatherDataInJson.currentConditions.temp)}°C`;
    feelLike.textContent = `Feels like : ${Math.round(weatherDataInJson.currentConditions.feelslike)}°C`;
    todaysHigh.textContent = `Today's high : ${Math.round(weatherDataInJson.days[0].tempmax)}°C`;
  } else if (tempUnitToggle.checked === false) {
    const temp = Math.round(weatherDataInJson.currentConditions.temp);
    const feelsLike = Math.round(weatherDataInJson.currentConditions.feelslike);
    const todaysHighTemp = Math.round(weatherDataInJson.days[0].tempmax);

    temperature.textContent = `${temp}°F`;
    feelLike.textContent = `Feels like : ${feelsLike}°F`;
    todaysHigh.textContent = `Today's high : ${todaysHighTemp}°F`;
  }
}

tempUnitToggle.addEventListener("change", () => {
  console.log(city.value);
  if (tempUnitToggle.checked) {
    fetchWeatherData(city.textContent, "metric");
  } else {
    fetchWeatherData(city.textContent, "us");
  }
});

export { displayWeatherDataOnDom, tempUnitToggle, giphySticker };
