

let cityName = document.getElementById("city-name")
let weatherType = document.getElementById("weather-type")
let temp = document.getElementById("temp")
let minTemp = document.getElementById("min-temp")
let maxTemp = document.getElementById("max-temp")


let API_KEY = "9cfbe1ca9266870be8ae8d3e96160a5c";


getWeatherData = (city) => {

  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric#"
  return fetch(url) 
  .then(response => response.json())
  .then(data => data )
  .catch(error => console.error(error)) 


}

const searchCity = async () => {
  const cityInputName = document.getElementById('city-input').value;
  const data = await getWeatherData(cityInputName)
  showWeatherData(data) 
  

}


const showWeatherData = (weatherData) => {
  console.log(weatherData)
  document.getElementById("temp").innerText = weatherData.main.temp 
  document.getElementById("city-name").innerText = weatherData.name
  document.getElementById("min-temp").innerText = weatherData.main.temp_min 
  document.getElementById("max-temp").innerText = weatherData.main.temp_max
  document.getElementById("weather-type").innerText = weatherData.weather[0].main
  
}

