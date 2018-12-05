const weather = document.querySelector(".js-weather")
const API_KEY = "7bf102fe1942d253656109ee0fd9a50a"
const COORDS = "coords"


function getWeather(lat, long){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`).then(function(response){
    return response.json()
  }).then(function(json){
    const temperature = json.main.temp
    const place = json.name
    weather.innerText = `${temperature} @ ${place}`
  })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}

function handleGeoError(){
  console.log("can't get")
}


function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}


function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS)
  if(loadedCoords === null){
    askForCoords()
  } else {
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init(){
  loadCoords()

}
init()
