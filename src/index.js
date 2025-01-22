import "./styles.css";
import { displayWeatherDataOnDom } from "./dom.js";
import { tempUnitToggle } from "./dom.js";



fetchWeatherData("Mumbai","metric");


const searchBar = document.querySelector("#search-input");



async function fetchWeatherData(location,unit) {
    
    let baseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    let apiUrl = baseUrl + `${location}?key=7PAMJ4SDEAKVH7K2V8XXH6DZ8&unitGroup=${unit}`; 
    try {
        const weatherData = await fetch(apiUrl, { mode: "cors" });
        const weatherDataInJson = await weatherData.json(); 

       
        console.log(weatherDataInJson);
        displayWeatherDataOnDom(weatherDataInJson);
        
    } catch (error) {
        console.log(error);
    }
}




async function displayWeatherSticker(weatherCondition) {
    let baseUrl = "https://api.giphy.com/v1/stickers/search?api_key=MUzjBZUJN1WQ7PnlpYY6uH4OLET8rAJL&q="
    let giphyUrl = baseUrl+weatherCondition;
    console.log(giphyUrl);
    
    let getStickerObject =  await fetch(giphyUrl, { mode: "cors" });
    let getStickerObjectJson =  await getStickerObject.json();
    console.log(getStickerObjectJson);
    return getStickerObjectJson.data[0].url;  
}




searchBar.addEventListener("keydown",(event)=>{
    if (event.key === "Enter") {
        let unit;
       let location = searchBar.value;
        if(tempUnitToggle.checked) {
            unit = "metric"
        }
        else {
            unit = "us";
        }
       fetchWeatherData(location,unit);
    }   
    });



export {fetchWeatherData,displayWeatherSticker};






