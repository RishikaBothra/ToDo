function addtask(){
    const todo = document.querySelector("input");
    const value = todo.value;

    if (value.trim() === "") {  
        alert("Enter your to-do");
        return;
    }

    const listiteams = document.createElement("li");
    listiteams.textContent =value;

    const remove = document.createElement("remove")
    remove.textContent = "X";

    remove.onclick = function(){
        listiteams.remove()
    };

    listiteams.appendChild(remove);

   

    const listContainer = document.getElementById("listContainer");
    listContainer.appendChild(listiteams);
}

