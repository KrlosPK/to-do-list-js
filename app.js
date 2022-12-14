const formEl = document.getElementById('form');
const userInputEl = document.getElementById('userInput');
const btnSubmitEl = document.getElementById('btnSubmit');
const todoList = document.getElementById('todos');

//* Muestra los quehaceres que el usuario tenía guardados localmente
createToDo();

console.log(localStorage.getItem('toDo'));

//* lo marca como completado
function check() {
	document.querySelectorAll('.todo').forEach((e) => {
		e.onclick = () => {
			e.classList.toggle('checked');
		};
	});
}
check();

//! Eliminar el quehacer de la lista
function remove() {
	document.querySelectorAll('.todo').forEach((e) => {
		e.oncontextmenu = (event) => {
			event.preventDefault();
			e.remove();
		};
	});
}
remove();

function createToDo() {
	//* Añadir un nuevo elemento validando si está vacío
	if (userInputEl.value !== '') {
		const newToDo = document.createElement('div');
		const newToDoSpan = document.createElement('span');
		const newToDoI = document.createElement('i');
		newToDo.classList.add('todo');
		newToDoI.classList.add('fa-solid');
		newToDoI.classList.add('fa-circle-check');
		localStorage.setItem(
			'toDo',
			(newToDoSpan.textContent = userInputEl.value)
		);
		newToDo.appendChild(newToDoSpan);
		newToDo.appendChild(newToDoI);
		todoList.appendChild(newToDo);
		userInputEl.value = '';
		localStorage.getItem('toDo');
		check();
		remove();
	} else {
		return;
	}
}

//? Enviar la información del usuario a la lista
formEl.addEventListener('submit', function (e) {
	e.preventDefault();
	createToDo();
});
