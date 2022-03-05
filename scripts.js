const display = document.querySelector('.firstDisplay');
const altDisplay = document.querySelector('.altDisplay')
const number = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const deleteVal = document.querySelector('.delete');
const negative = document.querySelector('.negative');
const factor = document.querySelector('.factorial');
const power = document.querySelector('.power');
const sqrt = document.querySelector('.sqrt');
const cbrt = document.querySelector('.cbrt');
const multiplication = document.querySelector('.multiply');
const sum = document.querySelector('.add');
const difference = document.querySelector('.subtract');
const division = document.querySelector('.divide');
const decimal = document.querySelector('.dec');
const equal = document.querySelector('.equal');

let a;
let b;
let operand = '';

let add = (a,b) => {
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

let exponent = (a,b) => {
    return Math.pow(a,b);
}

let squareRoot = (a) => {
    return Math.sqrt(a);
}

let cubeRoot = (a) => {
    return Math.cbrt(a);
}

let factorial = (a) => {
    let arr = [];
    for (let i = 1; i <= a; i++) {
        arr.push(i);
    }
    return arr.reduce((a,b) => {return a*b}, 1);
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
        case "^":
            return exponent(a,b);
            break;
    }
}

//Use forEach() to iterate through the array nodelist for all number buttons
function editDisplay() {
    number.forEach((btn) => {
        btn.addEventListener('click', () => {
            display.textContent = '';
            altDisplay.textContent += btn.textContent;
        })
    })
}

editDisplay();

function addDecimal() {
    decimal.addEventListener('click', () => {
        let str = altDisplay.textContent;
        display.textContent = '';
        return (str.includes('.')) ? str : altDisplay.textContent += decimal.textContent;
    })
}

addDecimal();

function makeNegative() {
    negative.addEventListener('click', () => {
        if (display.textContent != '' && altDisplay.textContent == '') {
            display.textContent = Number(display.textContent) * -1;
        } else if (altDisplay.textContent != '' && display.textContent == '') {
            altDisplay.textContent = Number(altDisplay.textContent) * -1;
        }
    })
}

makeNegative();

function sqRoot() {
    sqrt.addEventListener('click', () => {
        if (display.textContent != '' && altDisplay.textContent == '') {
            display.textContent = squareRoot(Number(display.textContent));
        } else if (altDisplay.textContent != '' && display.textContent == '') {
            altDisplay.textContent = squareRoot(Number(altDisplay.textContent));
        }
    })
}

sqRoot();

function cbRoot() {
    cbrt.addEventListener('click', () => {
        if (display.textContent != '' && altDisplay.textContent == '') {
            display.textContent = cubeRoot(Number(display.textContent));
        } else if (altDisplay.textContent != '' && display.textContent == '') {
            altDisplay.textContent = cubeRoot(Number(altDisplay.textContent));
        }
    })
}

cbRoot();

function factorials() {
    factor.addEventListener('click', () => {
        if (display.textContent != '' && altDisplay.textContent == '') {
            display.textContent = factorial(Number(display.textContent));
        } else if (altDisplay.textContent != '' && display.textContent == '') {
            altDisplay.textContent = factorial(Number(altDisplay.textContent));
        }
    })
}

factorials();

function plus() { 
    sum.addEventListener('click', () => {
        (display.textContent == '') ? a = display.textContent = altDisplay.textContent : a = display.textContent;
        altDisplay.textContent = '';
        operand = '+';
    })
}

plus();

function minus() { 
    difference.addEventListener('click', () => {
        (display.textContent == '') ? a = display.textContent = altDisplay.textContent : a = display.textContent;
        altDisplay.textContent = '';
        operand = '-';
    })
}

minus();

function multiple() { 
    multiplication.addEventListener('click', () => {
        (display.textContent == '') ? a = display.textContent = altDisplay.textContent : a = display.textContent;
        altDisplay.textContent = '';
        operand = '*';
    })
}

multiple();

function dividing() { 
    division.addEventListener('click', () => {
        (display.textContent == '') ? a = display.textContent = altDisplay.textContent : a = display.textContent;
        altDisplay.textContent = '';
        operand = '/';
    })
}

dividing();

function exponential() { 
    power.addEventListener('click', () => {
        (display.textContent == '') ? a = display.textContent = altDisplay.textContent : a = display.textContent;
        altDisplay.textContent = '';
        operand = '^';
    })
}

exponential();

function result() {
    equal.addEventListener('click', () => {
        b = altDisplay.textContent;
        altDisplay.textContent = '';
        display.textContent = operate(operand, Number(a), Number(b));
    })
}

result();

function clearDisplay() {
    clear.addEventListener('click', () => {
        display.textContent = '';
        altDisplay.textContent = '';
    })
}

clearDisplay();

function deleteLastCharacter() {
    deleteVal.addEventListener('click', () => {
        let str = display.textContent;
        let altStr = altDisplay.textContent;
        display.textContent = str.slice(0, -1);
        altDisplay.textContent = altStr.slice(0, -1);
    })
}

deleteLastCharacter();

