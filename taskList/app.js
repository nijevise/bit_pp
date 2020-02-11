//  define UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners

loadEventListeners();

// Load all event listeners function

function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTask);
  //   Remove task event
  taskList.addEventListener("click", removeTask);
  //   Clear tasks event
  clearBtn.addEventListener("click", clearTasks);

  //   Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks from LS
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement("li");
    // Add class to li

    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create new link element (x delete)
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    //   Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // append li to ul

    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task");
  }

  // Create li element
  const li = document.createElement("li");
  // Add class to li

  li.className = "collection-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element (x delete)
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  //   Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // append li to ul

  taskList.appendChild(li);

  // store in Locale storage
  storeTaskInLocalStorage(taskInput.value);

  //   clear Input
  taskInput.value = "";
  e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // remove from LS
      removeTasksFromLS(e.target.parentElement.parentElement);
    }
  }
}

// remove from LS

function removeTasksFromLS(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// clear tasks

function clearTasks() {
  //   taskList.remove();
  //   taskList.innerHTML = '';

  //   Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear from LS
  clearTasksFromLS();
}

// Clear tasks from LS

function clearTasksFromLS() {
  localStorage.clear();
}

// Filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
