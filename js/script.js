const taskInput = document.querySelector('#task');
const plus = document.querySelector('#plus');
const plusTask = document.querySelector('#plusTask');

// Загрузка задач из localStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
	loadTasks();

});

// Сохранение задачи в localStorage
function saveTask(task) {
	let tasks = JSON.parse(localStorage.getItem('tasks')) || []; //  проверка на наличие данных в localStorage
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Удаление задачи из localStorage
function removeTask(task) {
	let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	const index = tasks.indexOf(task);
	if (index > -1) {
		tasks.splice(index, 1);
		localStorage.setItem('tasks', JSON.stringify(tasks));

	}

}

// Загрузка задач из localStorage
function loadTasks() {
	let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

	tasks.forEach(function (task) {
		let li = document.createElement('li');
		li.textContent = task;
		plusTask.appendChild(li);
		li.className = 'li';

		//получение кнопки "Удалить" при загрузке данных из localStorage
const button = document.createElement('button');
		li.appendChild(button);
		button.textContent = ' Удалить';
		button.className = 'button btn';


		//отметка о выполнении Задачи загруженной из localStorage
		li.addEventListener('click', (e) => {
			li.classList.add('li-active');
			removeTask(task);
		});
	});

}

//Добавление задач и очищение поля input 
plus.addEventListener('click', (e) => {
	if (taskInput.value === '') {
		return alert('Заполните поле');
	}

	creatDelitElemets(taskInput.value);

	taskInput.value = '';

});




function creatDelitElemets(value) {
	const li = document.createElement('li');
	li.className = 'li';
	li.textContent = value;

	plusTask.appendChild(li);

	const button = document.createElement('button');

	li.appendChild(button);
	button.textContent = ' Удалить';
	button.className = 'button btn';
	// Сохранение введенной задачи в localStorage
	saveTask(value);




	//Отметка о выполнении Задачи и ее удаление
	button.addEventListener('click', (e) => {

		li.classList.add('li-active');


		removeTask(value);
	});
}

//Клик по кнопке Enter
const textarea = document.getElementById('task');
const enter = document.getElementById('plus');

textarea.addEventListener('keypress', function (e)  {
    if (e.key === 'Enter') {
        e.preventDefault();
        enter.click();
    }
});


