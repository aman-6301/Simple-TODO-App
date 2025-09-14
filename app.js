const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

document.querySelector("#push").onclick = function () {
  createTask();
};

function createTask() {
  const newTask = taskInput.value.trim();

  if (newTask.length === 0) {
    alert("The task field is blank. Enter a task name and try again.");
    return;
  }


  const existingTasks = document.querySelectorAll(".task p");
  for (let i = 0; i < existingTasks.length; i++) {
    if (existingTasks[i].textContent.trim().toLowerCase() === newTask.toLowerCase()) {
      alert("Task already exists in the list.");
      return;
    }
  }

 
  taskSection.innerHTML += `
    <div class="task">
      <label id="taskname">
        <input onclick="updateTask(this)" type="checkbox" id="check-task">
        <p>${newTask}</p>
      </label>
      <div class="delete">
        <ion-icon name="trash-outline"></ion-icon>
      </div>
    </div>`;

  taskInput.value = ""; 

 
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    btn.onclick = function () {
      this.parentNode.remove();
    };
  });

 
  taskSection.offsetHeight >= 300
    ? taskSection.classList.add("overflow")
    : taskSection.classList.remove("overflow");
}


function updateTask(task) {
  let taskItem = task.parentElement.querySelector("p");
  task.checked
    ? taskItem.classList.add("checked")
    : taskItem.classList.remove("checked");
}
