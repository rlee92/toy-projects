const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greeting")

const userName = "currentUser"
const isVisible = "is-visible"

let saveName = (name) => {
  localStorage.setItem(userName, name)
}

let handleGreetingSubmit = (event) => {
  event.preventDefault()
  const currVal = input.value
  getGreetingMsg(currVal)
  saveName(currVal)
}

let askForName = _ => {
  form.classList.add(isVisible)
  form.addEventListener("submit", handleGreetingSubmit)
}

let getGreetingMsg = (text) => {
  form.classList.remove(isVisible)
  greeting.classList.add(isVisible)
  greeting.innerText = `Hello,  ${text}`
}

let loadName = _ => {
  const currUser = localStorage.getItem(userName)
  if(currUser === null) {
    askForName()
  } else {
    getGreetingMsg(currUser)
  }
}

let initGreeting = _ => {
  loadName()
}

initGreeting()
