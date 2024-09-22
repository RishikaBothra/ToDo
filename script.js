function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove';
    removeButton.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(removeButton);
    
    taskList.appendChild(li);

    taskInput.value = '';
}
