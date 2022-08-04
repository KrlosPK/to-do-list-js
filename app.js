const formEl = document.getElementById("form");
const userInputEl = document.getElementById("userInput");
const btnSubmitEl = document.getElementById("btnSubmit");
const todoList = document.getElementById("todos");

// Enviar la información del usuario a la lista
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    createToDo();
});

function createToDo() {
    // Añadir un nuevo elemento validando si está vacío
    if (userInputEl.value !== "") {
        const newToDo = document.createElement("div");
        newToDo.classList.add("todo");
        newToDo.textContent = userInputEl.value;
        todoList.appendChild(newToDo);
        userInputEl.value = "";
    } else {
        return 0;
    }
}

// Marcar como completado
formEl.addEventListener("click", isChecked());
function isChecked() {
    var todoEl = document.querySelectorAll("div[class = 'todo']");
    for (i = 0; i < todoEl.length; i++) {
        todoEl[i].classList.toggle("checked");
    }
}

// Eliminar el quehacer de la lista
// todoEl.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     todoEl.remove();
// });
