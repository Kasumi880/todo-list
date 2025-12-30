// Get HTML element
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// When the form is submmited
form.addEventListener('submit', function (event) {
    event.preventDefault();
//   Get the user's input & Remove extra space
    const text = input.value.trim();
//  Do not add list,if nothing is entered.
    if (text === ""){
        return;
    }
    // Create one to do container
    const li = document.createElement("li");

    // Create elements
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");

    // When the check box click to seitch done/undone
    checkbox.addEventListener("change", function(){
        li.classList.toggle("done");
    });

    // Delete an item
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })

    // Edit an item
    editBtn.addEventListener("click", function(){
        const newText = prompt("Edit your task", span.textContent);
        if (newText !== null && newText.trim() !==""){
            span.textContent = newText.trim();
        }
    });

    // Put everythings inside the <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // Show the todo on the page
    list.appendChild(li);

    // Clear the input box
    input.value = "";
  });
  
