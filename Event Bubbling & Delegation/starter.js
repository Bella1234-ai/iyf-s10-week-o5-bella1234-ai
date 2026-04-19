// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    // Create and return li element
}

function renderTodos() {
    // Clear list and re-render based on filter
}

function addTodo(text) {
    // Add new todo to array and render
}

function toggleTodo(id) {
    // Toggle completed state
}

function deleteTodo(id) {
    // Remove from array and render
}

function updateStats() {
    // Update items left count
}

function filterTodos(filter) {
    // Set current filter and re-render
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add todo
});

todoList.addEventListener("click", function(event) {
    // Handle click on tasks (delegation)
});

// Initialize
renderTodos();

