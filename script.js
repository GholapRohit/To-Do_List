//task input
const taskInput = document.getElementById("task-input");

//date input
const dueDate = document.getElementById("due-date");

//time input
const dueTime = document.getElementById("due-time");

//add button
const addBtn = document.getElementById("add-btn");

//task list(ul)
const tasksList = document.getElementById("tasks-list");

//all task checkboxes
const taskCheckBoxes = document.querySelectorAll(".task-check");

//all task delete buttons
const taskDeleteButtons = document.querySelectorAll(".task-del");

//all status button
const allBtn = document.getElementById("all-btn");

//completed status button
const compBtn = document.getElementById("comp-btn");

//incomplete status button
const incompBtn = document.getElementById("incomp-btn");

//add <hr> below status buttons
function taskSeparator() {
  if (tasksList.children.length > 0) {
    document.querySelector("hr").classList.remove("hide");
  } else {
    document.querySelector("hr").classList.add("hide");
  }
}

//add task
addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") {
    alert("Please enter Task.");
    return;
  }
  if (dueDate.value === "") {
    alert("Please set due Date.");
    return;
  }
  if (dueTime.value === "") {
    alert("Please set due Time.");
    return;
  }

  //create list item and set class="task"
  const task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("incomp");

  //add task details to list item
  task.innerHTML = `<input type="checkbox" class="task-check"/>
          <span class="taskname">${taskInput.value.trim()} [${dueDate.value}, ${
    dueTime.value
  }]</span>
          <button class="task-edit"><i class="fas fa-edit"></i></button>
          <button class="task-del"><i class="far fa-trash-alt"></i></button>`;

  //add task at the end in the tasks-list
  tasksList.append(task);

  //reset input values
  taskInput.value = "";
  dueDate.value = "";
  dueTime.value = "";

  taskSeparator();
});

// checkbox checking
tasksList.addEventListener("change", (event) => {
  if (event.target.classList.contains("task-check")) {
    const taskName = event.target.nextElementSibling;
    if (event.target.checked) {
      taskName.classList.add("strikethrough");
      event.target.closest("li").classList.add("comp");
      event.target.closest("li").classList.remove("incomp");
    } else {
      taskName.classList.remove("strikethrough");
      event.target.closest("li").classList.remove("comp");
      event.target.closest("li").classList.add("incomp");
    }
  }
});

// delete task
tasksList.addEventListener("click", (event) => {
  if (event.target.closest(".task-del")) {
    event.target.closest("li").remove();
  }
  taskSeparator();
});

//edit task
tasksList.addEventListener("click", (event) => {
  if (event.target.closest(".task-edit")) {
    event.target.closest("li").remove();
    taskInput.value = event.target
      .closest("li")
      .querySelector(".taskname")
      .textContent.split("[")[0];
    dueDate.value = event.target
      .closest("li")
      .querySelector(".taskname")
      .textContent.split("[")[1]
      .split(",")[0];
    dueTime.value =
      event.target
        .closest("li")
        .querySelector(".taskname")
        .textContent.split("[")[1]
        .split(",")[1]
        .split("]")[0]
        .trim() + ":00";
  }
});

//display all tasks
allBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "#c607c6";
  compBtn.style.backgroundColor = "blueviolet";
  incompBtn.style.backgroundColor = "blueviolet";
  document.querySelectorAll(".task").forEach((task) => {
    task.classList.remove("hide");
  });
});

//display completed tasks
compBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "blueviolet";
  compBtn.style.backgroundColor = "#c607c6";
  incompBtn.style.backgroundColor = "blueviolet";
  document.querySelectorAll(".task").forEach((task) => {
    if (task.classList[1] == "incomp") {
      task.classList.add("hide");
    } else {
      task.classList.remove("hide");
    }
  });
});

//display incomppete task
incompBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "blueviolet";
  compBtn.style.backgroundColor = "blueviolet";
  incompBtn.style.backgroundColor = "#c607c6";
  document.querySelectorAll(".task").forEach((task) => {
    if (task.classList[1] == "comp") {
      task.classList.add("hide");
    } else {
      task.classList.remove("hide");
    }
  });
});
