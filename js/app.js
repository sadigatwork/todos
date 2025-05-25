document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const clearTasksBtn = document.getElementById("clearTasksBtn");
  const exportTasksBtn = document.getElementById("exportTasksBtn");

  // Function to add a task with delete button
  window.addTask = function () {
    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 border-b";

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    taskText.className = "cursor-pointer";
    taskText.addEventListener("click", () => editTask(taskText));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "ml-2 text-red-500";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  };

  // Function to edit a task using an input field
  function editTask(taskItem) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = taskItem.textContent;
    input.className = "border p-1 text-black";
    input.addEventListener("blur", () => saveTaskEdit(taskItem, input)); // Save when user clicks outside

    taskItem.replaceWith(input);
    input.focus();
  }

  function saveTaskEdit(taskItem, input) {
    if (input.value.trim() !== "") {
      taskItem.textContent = input.value;
      input.replaceWith(taskItem);
      taskItem.addEventListener("click", () => editTask(taskItem));
    } else {
      input.replaceWith(taskItem); // Restore if empty
    }
  }

  // Function to clear all tasks
  clearTasksBtn.addEventListener("click", () => {
    taskList.innerHTML = "";
  });

  // Function to export tasks to JSON
  exportTasksBtn.addEventListener("click", () => {
    const tasks = [];
    document
      .querySelectorAll("#taskList span")
      .forEach((span) => tasks.push(span.textContent));

    const jsonData = JSON.stringify({ tasks });
    const blob = new Blob([jsonData], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "tasks.json";
    a.click();
  });
});
