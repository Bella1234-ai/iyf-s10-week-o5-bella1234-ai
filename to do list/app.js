const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filters = document.querySelectorAll(".filter");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");

// Load from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Save to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Add task
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const todo = {
        id: Date.now(),
        text,
        completed: false
    };

    todos.push(todo);
    input.value = "";

    saveTodos();
    renderTodos();
});

// Render tasks
function renderTodos() {
    list.innerHTML = "";

    let filtered = todos.filter(todo => {
        if (currentFilter === "active") return !todo.completed;
        if (currentFilter === "completed") return todo.completed;
        return true;
    });

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        // ✅ Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked;
            saveTodos();
            renderTodos();
        });

        // 📝 Task text
        const span = document.createElement("span");
        span.textContent = todo.text;

        // ❌ Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            todos = todos.filter(t => t.id !== todo.id);
            saveTodos();
            renderTodos();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });

    updateStats();
}

// Filters
filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

// Update stats
function updateStats() {
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

// Clear completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

// Initial load
renderTodos();