function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.className = "bg-grey-100 p-2 rounded mb-2";
    li.textContent = taskInput.value.trim();
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
