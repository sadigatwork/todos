function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim()) {
    const li = document.createElement("li");
    li.className = "bg-gray-100 p-2 rounded mb-2 flex justify-between";
    li.innerHTML = `
      ${taskInput.value}
      <button onclick="this.parentElement.remove()" class="text-red-500">✕</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
