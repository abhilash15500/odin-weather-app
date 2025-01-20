import "./styles.css";
import { displayWeatherDataOnDom } from "./dom.js";
import { tempUnitToggle } from "./dom.js";


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


searchBar.addEventListener("keydown",(event)=>{
    if (event.key === "Enter") {
        let unit;
       let location = searchBar.value;
        if(tempUnitToggle.state === "F") {
            unit = "us"
        }
        else {
            unit = "metric";
        }
       fetchWeatherData(location,unit);
    }   
    });



// intialize app 

fetchWeatherData("Mumbai","metric");
     



export {fetchWeatherData};






