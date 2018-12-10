const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greeting")

const USER_NAME = "currentUser"
const IS_VISIBLE = "is-visible"

let saveName = (name) => {
  localStorage.setItem(USER_NAME, name)
}

let handleGreetingSubmit = (event) => {
  event.preventDefault()
  const currVal = input.value
  getGreetingMsg(currVal)
  saveName(currVal)
}

let requestName = _ => {
  form.classList.add(IS_VISIBLE)
  form.addEventListener("submit", handleGreetingSubmit)
}

let getGreetingMsg = (text) => {
  form.classList.remove(IS_VISIBLE)
  greeting.classList.add(IS_VISIBLE)
  greeting.innerText = `Hello,  ${text}`
}

let loadName = _ => {
  const currUser = localStorage.getItem(USER_NAME)
  if(currUser === null) {
    requestName()
  } else {
    getGreetingMsg(currUser)
  }
}

let initGreeting = _ => {
  loadName()
}

initGreeting()
