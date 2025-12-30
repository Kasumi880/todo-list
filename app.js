const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const text = input.value.trim();

    if (text === ""){
        return;
    }
    
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })

    checkbox.addEventListener("change", function(){
        li.classList.toggle("done");
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = "";
  });
  
