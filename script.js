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
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);

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