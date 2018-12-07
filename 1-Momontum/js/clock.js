const clockContainer = document.querySelector(".js-clock")
const clockTitle = document.querySelector(".clock-title")

var getTime = _ => {
  const date = new Date()
  const hours = date.getHours()
  const hr = hours < 10 ? `0${hours}` : hours
  const minutes = date.getMinutes()
  const min = minutes < 10 ? `0${minutes}` : minutes
  const seconds = date.getSeconds()
  const sec = seconds < 10 ? `0${seconds}` : seconds
  clockTitle.innerText = `${hr} : ${min} : ${sec}`
}

var init = _ => {
  getTime()
  setInterval(getTime, 1000)
}

init()
