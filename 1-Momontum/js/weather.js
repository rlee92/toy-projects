const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?"
const API_KEY = "7bf102fe1942d253656109ee0fd9a50a"
const COORDS = "currentCoordinate"

const weather = document.querySelector(".js-weather")

let getWeather = (lat, lon) => {
  fetch(`${WEATHER_API}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(json => {
    const temperature = Math.floor(json.main.temp)
    const location = json.name
    weather.innerText = `${location} ${temperature}°C`
  })
}

let saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

let success = (position) => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}

let error = _ => {
  alert("Where are you?")
}

let requestCoords = _ => {
  navigator.geolocation.getCurrentPosition(success, error)
}

let loadCoords = _ => {
  const loadedCoords = localStorage.getItem(COORDS)
  if(loadedCoords === null){
    requestCoords()
  } else {
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

let initWeather = _ => {
  loadCoords()
}

initWeather()
