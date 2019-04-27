var taskInput=document.getElementById('new-task')

function createNewTask(str){

    var list = document.createElement('li')
    
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onclick = checkboxes

    var listedLabel = document.createElement('label')
    listedLabel.innerHTML = str

    var delButton = document.createElement('button')
    var delButtonText = document.createTextNode('\327')
    delButton.setAttribute('class', 'del-btn')
    delButton.appendChild(delButtonText)
    delButton.addEventListener('click', deleteTask)

    list.appendChild(checkbox)
    list.appendChild(listedLabel)
    list.appendChild(delButton)

    return list
}