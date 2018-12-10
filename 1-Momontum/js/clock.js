const clockContainer = document.querySelector(".js-clock")

let getTime = _ => {
  const date = new Date()
  const hours = date.getHours()
  const HR = hours < 10 ? `0${hours}` : hours
  const minutes = date.getMinutes()
  const MIN = minutes < 10 ? `0${minutes}` : minutes
  const seconds = date.getSeconds()
  const SEC = seconds < 10 ? `0${seconds}` : seconds
  // clockContainer.innerText = `${HR} : ${MIN} : ${SEC}`
  clockContainer.innerText = `${HR} : ${MIN}`
}

let initClock = _ => {
  getTime()
  setInterval(getTime, 1000)
}

initClock()
