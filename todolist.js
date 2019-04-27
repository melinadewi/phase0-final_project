var anchor = document.createElement('div')
anchor.setAttribute('id', 'home')
document.body.appendChild(anchor)

var listDiv = document.createElement('div')
listDiv.setAttribute('class', 'list')
document.body.appendChild(listDiv)

// Add New Task
var addDiv = document.createElement('div')
addDiv.setAttribute('class', 'add')
listDiv.appendChild(addDiv)

var addTask = document.createElement('p')
addDiv.appendChild(addTask)

var inputTask = document.createElement('input')
inputTask.setAttribute('type', 'text')
inputTask.setAttribute('id', 'new-task')
var addLabel = document.createElement('label')
addLabel.setAttribute('for','new-task')
addLabel.innerHTML = 'Add Task'
addTask.appendChild(addLabel)
addTask.appendChild(inputTask)

function addTasks(){
    if(taskInput.value === ''){
        alert('Empty string! No task added!')
    }
    else{
        var list = createNewTask(taskInput.value)
        todoDiv.appendChild(list)        
        taskInput.value = ''
    }
}

var addButton = document.createElement('button')
var addButtonText = document.createTextNode('\53')
addButton.setAttribute('class', 'add-btn')
addButton.appendChild(addButtonText)
addButton.addEventListener('click', addTasks)
addTask.appendChild(addButton)


// Things To Do
var todoDiv = document.createElement('div')
todoDiv.setAttribute('class', 'todo')
listDiv.appendChild(todoDiv)

var todoTask = document.createElement('p')
todoDiv.appendChild(todoTask)
var todoText = document.createTextNode('Things To Do')
todoTask.appendChild(todoText)

var listTask = document.createElement('ul')


function deleteTask(){
    var list = this.parentNode
    var ul = list.parentNode
    list.style.opacity = 0
    setTimeout(function(){ul.removeChild(list)}, 1000)
}


function checkboxes(){
    var list = this.parentNode
    var ul = list.parentNode
    if (this.checked && ul === todoDiv){
        finishDiv.appendChild(list)
        if(todoDiv.children.length === 1){
            alert('All tasks completed!')
        }
    } else if (!this.checked && ul === finishDiv){
        todoDiv.appendChild(list)
    }
}


var listedTask = document.createElement('li')
listTask.appendChild(listedTask)

var inputTodoTask = document.createElement('input')
inputTodoTask.setAttribute('type', 'checkbox')
inputTodoTask.onclick = checkboxes
listedTask.append(inputTodoTask)

var listedLabel = document.createElement('label')
listedLabel.innerHTML = 'Lulus Fase 1'
listedTask.appendChild(listedLabel)

var delButton = document.createElement('button')
var delButtonText = document.createTextNode('\327')
delButton.setAttribute('class', 'del-btn')
delButton.appendChild(delButtonText)
delButton.addEventListener('click', deleteTask)
listedTask.appendChild(delButton)

todoDiv.appendChild(listedTask)


var listedTask = document.createElement('li')
listTask.appendChild(listedTask)

var inputTodoTask = document.createElement('input')
inputTodoTask.setAttribute('type', 'checkbox')
inputTodoTask.onclick = checkboxes
listedTask.append(inputTodoTask)

var listedLabel = document.createElement('label')
listedLabel.innerHTML = 'Lulus Fase 2'
listedTask.appendChild(listedLabel)

var delButton = document.createElement('button')
var delButtonText = document.createTextNode('\327')
delButton.setAttribute('class', 'del-btn')
delButton.appendChild(delButtonText)
delButton.addEventListener('click', deleteTask)
listedTask.appendChild(delButton)

todoDiv.appendChild(listedTask)



// Finished Task
var finishDiv = document.createElement('div')
finishDiv.setAttribute('class', 'finish')
listDiv.appendChild(finishDiv)

var finTask = document.createElement('p')
finishDiv.appendChild(finTask)
var finText = document.createTextNode('Completed Tasks')
finTask.appendChild(finText)

var listFinish = document.createElement('ul')

var listedFinish = document.createElement('li')
listFinish.appendChild(listedFinish)

var inputFinTask = document.createElement('input')
inputFinTask.setAttribute('type', 'checkbox')
inputFinTask.checked = true
inputFinTask.onclick = checkboxes
listedFinish.append(inputFinTask)

var listedLabel = document.createElement('label')
listedLabel.innerHTML = 'Lulus Fase 0'
listedFinish.appendChild(listedLabel)

var delButton = document.createElement('button')
var delButtonText = document.createTextNode('\327')
delButton.setAttribute('class', 'del-btn')
delButton.appendChild(delButtonText)
delButton.addEventListener('click', deleteTask)
listedFinish.appendChild(delButton)

finishDiv.appendChild(listedFinish)