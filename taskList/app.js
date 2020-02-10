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
  // add task event
  form.addEventListener("submit", addTask);
  //   Remove task event
  taskList.addEventListener("click", removeTask);
  //   Clear tasks event
  clearBtn.addEventListener("click", clearTasks);

  //   Filter tasks event
  filter.addEventListener("keyup", filterTasks);
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
  //   clear Input
  taskInput.value = "";
  e.preventDefault();
}

// Remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    }
  }
}

// clear tasks

function clearTasks() {
  //   taskList.remove();
  //   taskList.innerHTML = '';

  //   Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
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
