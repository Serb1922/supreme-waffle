function createNewCheck(value) {
    let id = Date.now()
    let newDiv = document.createElement("div");
    newDiv.className = 'container2'
    let newCheck = document.createElement("input");
    newCheck.className = 'check';
    newCheck.setAttribute('type', 'checkbox');
    newCheck.setAttribute('id', id);
    let newToDo = document.createElement('label')
    newToDo.className = 'ToDo';
    newToDo.setAttribute('for', id);
    newToDo.innerText = value
    newDiv.append(newCheck, newToDo);
    console.log(newDiv)
    return newDiv;
}

createNewCheck('wake');
