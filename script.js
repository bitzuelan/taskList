// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAllButton')

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

clearAllButton.addEventListener('click', clearTasks);

function addTask() {
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">X</button>
    `;

    // Add event listener to the delete button
    li.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(li); // Remove the task
    });

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
};

function clearTasks() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        taskList.innerHTML = '';
    }
}