// Selecting elements from the HTML document
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const viewBtn = document.getElementById("viewBtn");
const taskList = document.getElementById("taskList");

// Function to delete a task
const deleteHandler = (event) => {
  const tasks = taskList.querySelectorAll("li");

  // Loop through the tasks and remove the selected task
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const deleteBtn = task.querySelector("button");

    // If the delete button was clicked, remove the task
    if (deleteBtn === event.target) {
      taskList.removeChild(task);
      break;
    }
  }
}

// Adding event listeners to the buttons
addBtn.addEventListener("click", addTask);
viewBtn.addEventListener("click", viewTasks);

// Function to add a task
function addTask(event) {
  event.preventDefault();

  // Get the input value and create a new li element
  const taskText = taskInput.value;
  const li = document.createElement("li");

  // Add the task text to the li element
  const taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;
  li.appendChild(taskSpan);

  // Add the delete button to the li element
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", deleteHandler);
  li.appendChild(deleteBtn);

  // Add the li element to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

// Function to view the tasks
function viewTasks() {
  const tasks = taskList.querySelectorAll("li");
  alert(`You have ${tasks.length} tasks.`);
}