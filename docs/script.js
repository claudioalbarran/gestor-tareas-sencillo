function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.textContent = taskText;

    // Completar tarea
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    // Eliminar tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
  }
}
