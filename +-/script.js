let myFirst = 1;
let result = 0;
printResult(result);
document.querySelector("#iterator").onchange = function (event) {
    myFirst = event.target.valueAsNumber
    console.log(event.target.value)
};
document.querySelector('#up').onclick = function up() {
    result = result + myFirst
    printResult(result)
};
document.querySelector('#down').onclick = function down() {
    result = result - myFirst
    printResult(result)
};
function printResult(value) {
    document.querySelector('#value').innerText = value

    console.log(value)
};
