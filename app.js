const formEl = document.getElementById("form");
const userInputEl = document.getElementById("userInput");
const btnSubmitEl = document.getElementById("btnSubmit");
const todoEl = document.getElementById("todo");
const todoList = document.getElementById("todos");

// Enviar la información del usuario a la lista
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    // Añadir un nuevo elemento
    const newToDo = document.createElement("div");
    newToDo.classList.add("todo");
    newToDo.textContent = userInputEl.value;
    todoList.appendChild(newToDo);
});

// Marcar como completado
todoEl.addEventListener("click", function () {
    todoEl.classList.toggle("checked");
});

// Eliminar el quehacer de la lista
todoEl.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    todoEl.remove();
});
