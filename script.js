let form = document.getElementById('addTask');
let taskList = document.getElementById('task_list');
form.addEventListener('submit', createTask);

function newTaskField() {
    let newTaskInput = document.getElementById('taskInput').value;
    const task_card = document.createElement('li');
    const square_box = document.createElement('div');
    const check_box = document.createElement('input');
    const task_text = document.createElement('div');
    const container_div = document.createElement('div');
    const edit_button = document.createElement('a');
    const delete_button = document.createElement('a');
    const edit_icon = document.createElement('i');
    const delete_icon = document.createElement('i');
    const br = document.createElement('br');
    task_card.className = 'task-card main-bgcolor shadow-color shadow-border-color ';
    square_box.className = 'square_box';
    check_box.type = 'checkbox'
    check_box.id = 'default'
    check_box.addEventListener('change', toggleTask)
    task_text.className = 'task-text';
    task_text.id = 'task_info';
    task_text.textContent = newTaskInput;
    container_div.style.float = 'right';
    edit_button.className = 'main-font-color';
    edit_button.style.paddingRight = '5px';
    edit_button.addEventListener('click', editTask);
    edit_button.id = 'edit'
    edit_icon.className = 'fa fa-pencil-square-o';
    delete_button.className = '"main-font-color delete';
    delete_button.addEventListener('click', deleteTask);
    delete_icon.className = 'fa fa-trash';
    delete_button.id = 'delete'
    edit_button.appendChild(edit_icon);
    delete_button.appendChild(delete_icon);
    square_box.appendChild(check_box);
    container_div.append(edit_button, br, delete_button);
    task_card.append(square_box, task_text, container_div);
    return task_card

}

function editTaskField() {
    const task_card = document.createElement('li');
    const task_text = document.createElement('div');
    const edit_input = document.createElement('input')
    const container_div = document.createElement('div');
    const update_button = document.createElement('a');
    const update_icon = document.createElement('i');
    const br = document.createElement('br');
    task_card.className = 'task-card main-bgcolor shadow-color shadow-border-color ';
    task_text.className = 'task-text';
    task_text.id = 'task_info';
    edit_input.type = 'text';
    edit_input.className = 'editing-task';
    edit_input.defaultValue = "fthis is"
    task_text.appendChild(edit_input);
    container_div.style.float = 'right';
    update_button.className = 'main-font-color';
    update_button.style.paddingRight = '5px';
    update_button.addEventListener('click', updateTask);
    update_button.id = 'update'
    update_icon.className = 'fa fa-check';
    update_button.appendChild(update_icon);
    container_div.append(update_button);
    task_card.append(task_text, container_div);
    return task_card

}

function createTask(event) {
    event.preventDefault();
    let newTaskInput = document.getElementById('taskInput').value;
    let taskList = document.getElementById('task_list')
    if (newTaskInput != '') {
        taskList.appendChild(newTaskField());
        clearInputField();
        incrementNumberOfTask();
    } else {
        returnErrorForEmptyInput()
    }
}

function editTask(event) {
    if (event.target.parentElement.id === 'edit') {
        const currentTask = event.target.parentElement.parentElement.parentElement;
        let currentText = currentTask.children[1].textContent;
        let editInput = editTaskField()
        editInput.children[0].firstChild.defaultValue = currentText
        currentTask.replaceWith(editInput)
    }
}

function updateTask(event) {
    let currentTask = event.target.parentElement.parentElement.parentElement;
    let new_value = event.target.parentElement.parentElement.previousSibling.firstChild.value;
    let updatedTask = newTaskField()
    updatedTask.children[1].textContent = new_value
    currentTask.parentElement.appendChild(updatedTask)
    currentTask.parentElement.removeChild(currentTask)

}

function deleteTask(event) {
    if (event.target.parentElement.id === 'delete') {
        if (confirm('Are you sure of this delete?')) {
            const currentTask = event.target.parentElement.parentElement.parentElement;
            taskList.removeChild(currentTask);
            decrementNumberOfTask()
        }
    }

}

function toggleTask(event) {
    let eventIdentifeir = event.target.parentElement.parentElement.firstChild.children[0].id;
    if (eventIdentifeir === 'default') {
        event.target.parentElement.parentElement.className = "task-card-completed main-bgcolor shadow-color shadow-border-color";
        document.getElementById('default').id = 'isSelected'
    } else {
        event.target.parentElement.parentElement.className = "task-card main-bgcolor shadow-color shadow-border-color";
        document.getElementById('isSelected').id = 'default';
    }

}

function returnErrorForEmptyInput(params) {
    input_field = document.getElementById('taskInput')
    input_field.placeholder = "You must add a todo!";
    input_field.className = 'danger'

}

function clearInputField() {
    document.getElementById('taskInput').value = '';
    document.getElementById('taskInput').placeholder = "Add Another Task";
    document.getElementById('taskInput').className = 'todo main-bgcolor main-font-color'
}

function incrementNumberOfTask() {
    let getNumberOfTasks = () => (document.getElementsByTagName('li').length);
    let number = document.getElementById('taskNumber');
    number.textContent = getNumberOfTasks()
}

function decrementNumberOfTask() {
    let getNumberOfTasks = () => (document.getElementsByTagName('li').length);
    let number = document.getElementById('taskNumber');
    number.textContent = getNumberOfTasks()
}

function tickClock() {
    let date = new Date;
    let ticker = date.toLocaleTimeString()
    return document.getElementById('clock-box').textContent = ticker
}

function dateUpdater() {
    let date = new Date;
    let day = date.toDateString()
    return document.getElementById('day-box').textContent = day
}
setInterval(() => {
    {
        tickClock(), dateUpdater()
    }
}, 10);