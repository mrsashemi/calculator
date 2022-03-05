const display = document.querySelector('.display');
const number = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const deleteVal = document.querySelector('.delete');
const negative = document.querySelector('.negative');
const factorial = document.querySelector('.factorial');
const power = document.querySelector('.power');
const sqrt = document.querySelector('.sqrt');
const cbrt = document.querySelector('.cbrt');
const multiplication = document.querySelector('.multiply');
const sum = document.querySelector('.add');
const difference = document.querySelector('.subtract');
const division = document.querySelector('.divide');
const decimal = document.querySelector('.dec');
const equal = document.querySelector('.equal');


let add = (a, b) => {
    return a + b;
}

let subtract = (a,b) => {
    return a - b;
}

let multiply = (a,b) => {
    return a*b;
}

let divide = (a,b) => {
    return a/b;
}

let operate = (operand, a, b) => {
    switch(operand) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

function editDisplay() {
    number.forEach((btn) => {
        btn.addEventListener('click', () => {
            display.textContent = btn.textContent;
        })
    })
}

editDisplay();