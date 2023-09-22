document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-task-btn");
    const highlightEvenBtn = document.getElementById("highlight-even-btn");
    const highlightOddBtn = document.getElementById("highlight-odd-btn");
    const deleteLastBtn = document.getElementById("delete-last-btn");
    const deleteFirstBtn = document.getElementById("delete-first-btn");
    const completeBtn = document.getElementById("complete-btn");
    
    addTaskBtn.addEventListener("click", function() {
        const taskInput = document.getElementById("task-input");
        const task = taskInput.value;
        
        if(task) {
            addTask(task);
            taskInput.value = "";
        }
    });
    
    highlightEvenBtn.addEventListener("click", function() {
        const taskItems = taskList.getElementsByTagName("li");
        
        for(let i = 0; i < taskItems.length; i++) {
            if(i % 2 === 0) {
                taskItems[i].classList.toggle("highlight-even");
            }
        }
    });
    
    highlightOddBtn.addEventListener("click", function() {
        const taskItems = taskList.getElementsByTagName("li");
        
        for(let i = 0; i < taskItems.length; i++) {
            if(i % 2 !== 0) {
                taskItems[i].classList.toggle("highlight-odd");
            }
        }
    });
    
    deleteLastBtn.addEventListener("click", function() {
        const taskItems = taskList.getElementsByTagName("li");
        
        if(taskItems.length > 0) {
            taskList.removeChild(taskItems[taskItems.length - 1]);
        }
    });
    
    deleteFirstBtn.addEventListener("click", function() {
        const taskItems = taskList.getElementsByTagName("li");
        
        if(taskItems.length > 0) {
            taskList.removeChild(taskItems[0]);
        }
    });
    
    completeBtn.addEventListener("click", function() {
        const taskItems = taskList.getElementsByTagName("li");
        
        if(taskItems.length > 0) {
            const firstTask = taskItems[0];
            taskList.removeChild(firstTask);
            taskList.appendChild(firstTask);
            firstTask.classList.add("completed");
        }
    });
    
    function addTask(task) {
        const taskItem = document.createElement("li");
        taskItem.innerText = task;
        taskList.appendChild(taskItem);
    }
  });
  
  