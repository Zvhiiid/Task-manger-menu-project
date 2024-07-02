document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input')
    const addTaskBtn = document.getElementById('add-task-btn')
    const taskList = document.getElementById('task-list')
    const filterButtons = document.getElementById('filter-button')

    let tasks = []
    let filter = 'all'

    addTaskBtn.addEventListener('click', addTask)
    taskList.addEventListener('click', handleTaskAction)

    filterButtons
    array.forEach(button => {
        button.addEventListener('click', handleFilter)

    });
})

function addTask() {
    const taskText = taskInput.value.trim()
    if (task === '') return

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    task.push(task)
    taskInput.value = ''
    rederTasks()
}

function handleTaskAction(event) {
    const targer = event.target
    const taskId = target.closest('li').dataset.id

    if (target.classList.contains('delete-btn')) {
        tasks = tasks.filter(task => task.id != taskId);
    } else if (target.classList.contains('complete-btn')) {
        const task = tasks.find(task => task.id == taskId);
        task.completed = !task.completed;
    } else if (target.classList.contains('edit-btn')) {
        const newTaskText = prompt('Edit your task:', target.closest('li').querySelector('.task-text').textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            const task = tasks.find(task => task.id == taskId);
            task.text = newTaskText.trim();
        }
    }

    renderTasks();
}

function handleFilter(event) {
    filter = event.target.dataset.filter;
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.dataset.id = task.id;
        taskItem.className = task.completed ? 'completed' : '';

        taskItem.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}