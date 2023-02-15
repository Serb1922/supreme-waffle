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

    // Объявиить перменную и присвоить ей Див
    // добавить класс контейнер созданному дтиву сохраненому в переменную
}
// document.body.appendChild(createNewCheck('learn JS'))
// document.body.appendChild(createNewCheck('lear'))
// document.body.appendChild(createNewCheck('le'))
createNewCheck('wake');
