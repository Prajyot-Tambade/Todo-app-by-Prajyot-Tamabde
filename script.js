const taskContainer = document.getElementById("taskContainer");
const input = document.getElementById("taskInput");

const addElement = () => {
    if (input.value === "") {
        alert("Enter something in input filed");
    } else {
        const li = document.createElement("li");
        li.className = "task";

        li.textContent = input.value;

        const span = document.createElement("span");
        span.className = "cross";

        li.appendChild(span);

        taskContainer.appendChild(li);
    }

    input.value = "";
    saveData();
};

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("btn").click();
    }
});

taskContainer.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

const saveData = () => {
    localStorage.setItem("data", taskContainer.innerHTML);
};

const showTask = () => {
    taskContainer.innerHTML = localStorage.getItem("data");
};

showTask();
