function domLoaded() {
    
    const addButton = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");

    addButton.addEventListener("click", addBtnClick);

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });


    const existingDone = document.querySelectorAll(".done-btn");
    existingDone.forEach(btn => btn.addEventListener("click", removeTask));
}

function addBtnClick() {
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim();

    if (newTask !== "") {

        addTask(newTask);

        taskInput.value = "";
        taskInput.focus();
    }
}

function addTask(taskText) {
    const newListItem = document.createElement("li");

    newListItem.innerHTML = `${taskText} <span class="done-btn">&#x2718;</span>`;

    const ol = document.querySelector("ol");
    ol.appendChild(newListItem);

    const lastButton = newListItem.querySelector(".done-btn");
    if (lastButton) lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    const ol = li.parentNode;
    ol.removeChild(li);
}

window.addEventListener("DOMContentLoaded", domLoaded);
