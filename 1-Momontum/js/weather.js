const weather = document.querySelector(".js-weather")
const API_KEY = "7bf102fe1942d253656109ee0fd9a50a"
const COORDS = "coords"


let getWeather = (lat, long) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`).then((response) => {
    return response.json()
  }).then((json) => {
    const temperature = json.main.temp
    const place = json.name
    weather.innerText = `${temperature}°C \n ${place}`
  })
}

let saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

let handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}

let handleGeoError = _ =>{
  console.log("can't get")
}


let askForCoords = _ =>{
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}


let loadCoords = _ => {
  const loadedCoords = localStorage.getItem(COORDS)
  if(loadedCoords === null){
    askForCoords()
  } else {
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

let initWeather = _ => {
  loadCoords()

}
initWeather()
