let inputVal = document.querySelector("#inp");
let ad = document.getElementById("add");
let tasks = [];
let m = 0;

window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = savedTasks;
  tasks.forEach((task) => {
    createTaskElement(task.text, task.id);
  });
};

ad.addEventListener("click", () => {
  if (inputVal.value !== "") {
    const taskText = inputVal.value;
    const taskId = `d${m}`;
    tasks.push({ text: taskText, id: taskId });
    saveTasksToLocalStorage();
    createTaskElement(taskText, taskId);
    inputVal.value = "";
    document.querySelector("#show").innerHTML = "List added successfully!";
    document.querySelector("#show").style.color = "green";
    m++;
  } else {
    document.querySelector("#show").innerHTML = "Invalid input value!";
    document.querySelector("#show").style.color = "red";
  }
});

function createTaskElement(text, id) {
  const oldDiv = document.querySelector(".main");
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", id);
  newDiv.setAttribute("id", "list");

  const txt = document.createElement("h4");
  txt.textContent = "🔻" + text;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "🗑️";
  deleteButton.style.background = "transparent";
  deleteButton.style.fontWeight = "light";
  deleteButton.style.border = "none";
  deleteButton.style.marginRight = "7px";

  deleteButton.addEventListener("click", () => {
    oldDiv.removeChild(newDiv);
    tasks = tasks.filter((task) => task.id !== id);
    saveTasksToLocalStorage();
  });

  newDiv.appendChild(txt);
  newDiv.appendChild(deleteButton);
  oldDiv.appendChild(newDiv);
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
