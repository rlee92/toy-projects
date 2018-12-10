const toDoForm = document.querySelector(".js-todoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-todoList")

const TODO_ITEMS = "todo_items"
let todo_list = []
let count = 0


let deleteToDo = (event) =>  {
  const btn = event.target
  const li = btn.parentNode
  toDoList.removeChild(li)
  const cleanToDos = todo_list.filter(function(toDo){
    return toDo.id !== parseInt(li.id)
  })
  todo_list = cleanToDos
  saveToDos()
  count++
}

let saveToDos = _ =>{
  localStorage.setItem(TODO_ITEMS, JSON.stringify(todo_list))
}

let printTodo = (text) => {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = todo_list.length+count+1
  delBtn.innerText = "X"
  delBtn.addEventListener("click", deleteToDo)
  span.innerText = text
  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId
  toDoList.appendChild(li)
  const todoObj = {
    text: text,
    id: newId
  }
  todo_list.push(todoObj)
  saveToDos()
}

let handleTodoSubmit = (event) => {
  event.preventDefault()
  const currentValue = "  " + toDoInput.value
  printTodo(currentValue)
  toDoInput.value = ""
}

let loadToDos = _ => {
  const loadedTodos = localStorage.getItem(TODO_ITEMS)
  if(loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos)
    parsedToDos.forEach((toDo) => {
      printTodo(toDo.text)
    })
  }
}


let initTodo = _ => {
  loadToDos()
  toDoForm.addEventListener("submit", handleTodoSubmit)
}
initTodo()
