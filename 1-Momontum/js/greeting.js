const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const userName = "currentUser"
const isVisible = "is-visible"

var saveName = (name) => {
  localStorage.setItem(userName, name)
}

var handleSubmit = (event) => {
  event.preventDefault()
  const currVal = input.value
  paintGreeting(currVal)
  saveName(currVal)
}

var askForName = () => {
  form.classList.add(isVisible)
  form.addEventListener("submit", handleSubmit)
}

var paintGreeting = (text) => {
  form.classList.remove(isVisible)
  greeting.classList.add(isVisible)
  greeting.innerText = `Hello,  ${text}`
}

var loadName = _ => {
  const currUser = localStorage.getItem(userName)
  if(currUser === null) {
    askForName()
  } else {
    paintGreeting(currUser)
  }
}

var init = _ => {
  loadName()
}

init()
