document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("create-task-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskDescription = event.target["new-task-description"].value;

  const li = document.createElement("li");
  li.textContent = taskDescription;

  const tasks = document.getElementById("tasks");
  tasks.appendChild(li);
});
});

  
  
  