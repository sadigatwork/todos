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

function editTask(index) {
  const listItems = document.querySelectorAll("#taskList li");
  const taskText = listItems[index].textContent;

  const newText = prompt("Edit task:", taskText);
  if (newText !== null && newText.trim() !== "") {
    listItems[index].textContent = newText;
  }
}

// تعديل عنصر عند النقر عليه
document.querySelectorAll("#taskList li").forEach((li, index) => {
  li.addEventListener("dblclick", () => editTask(index));
});

function clearTasks() {
  document.getElementById("taskList").innerHTML = "";
}

// زر لحذف جميع المهام
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All Tasks";
clearBtn.className = "bg-red-500 text-white p-2 mt-2";
clearBtn.onclick = clearTasks;
document.body.appendChild(clearBtn);
