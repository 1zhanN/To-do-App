const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// Function to add a task
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "cross-button";
        li.appendChild(span);
        let span1 = document.createElement("span");
        span1.innerHTML = "\u270E";
        li.appendChild(span1);
        span1.className = "edit-button";

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.className === "cross-button"){
        e.target.parentElement.remove();
        saveData()
    }
    else if(e.target.className === "edit-button"){
        // Replace the task text with an input field for editing
        const li = e.target.parentElement;
        const taskText = li.firstChild.textContent.trim();

        const inputField = document.createElement("input");
        inputField.value = taskText;
        li.innerHTML = ''; // Clear the current content of the <li> element
        li.appendChild(inputField);

        // Add an event listener to save changes when the Enter key is pressed
        inputField.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                if(inputField.value == ''){
                    alert("You must enter something!")
                }
                else{
                    const updatedTaskText = inputField.value;
                    li.innerHTML = updatedTaskText + ' <span class="cross-button">\u00d7</span> <span class="edit-button">\u270E</span>';
                    saveData();
                }
            }
        });

        inputField.focus(); // Focus on the input field for editing
    }
}, false);



//saving data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
 showTask()

//testing

const inputField = document.querySelector("#input-box");

// Event listener for the "Enter" key
inputField.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
