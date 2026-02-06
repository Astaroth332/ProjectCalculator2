function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function sub(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function mul(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function div(num1, num2)  {
    return parseFloat(num1) / parseFloat(num2);
}

function operate(num1, operate, num2) {

    switch (operate) {
        case '+':
            return add(num1, num2);
        break;
        case '-':
            return sub(num1, num2);
        break;
        case '*':
            return mul(num1, num2);
        break;
        case '/':
            return div(num1, num2);
        break;
    }
}

function convertToNumber(number) {
    return parseFloat(number);
}

function displayValue(str) {
    display.value +=str;
}


let firstOperand = '', secondOperand = '', operator = '';

const numberButtonsContainer = document.querySelector('.numbersContainer');
const display = document.querySelector('#displayInput');
const calculate = document.querySelector('#equal');
const operatorButtonsContainer = document.querySelector('.operatorsContainer');

let numOneOccupied = false;
let secondOperandTurn = true;
let firstOperandTurn = true;
let displayNaN = false;

function displayInitialValue(){
    display.value = 0;
}

displayInitialValue()

numberButtonsContainer.addEventListener('click', (e) => {
    let buttons = e.target.id;

    if(displayNaN) {
        display.value = 'NaN';
        return;
    }

    if(!numOneOccupied) {
         if(firstOperandTurn) {
            display.value = '';
            firstOperandTurn = false;
        }
        firstOperand+=buttons;
        displayValue(buttons);
    }
    else
    {
        if(secondOperandTurn) {
            display.value = '';
            secondOperandTurn = false;
        }
        isOperatorSelected  = false;
        secondOperand+=buttons;
        displayValue(buttons);
    }
});

let isOperatorSelected = false;
let result = '';


operatorButtonsContainer.addEventListener('click' , (e) => {
    let buttons = e.target.id;
    console.log(buttons);
    console.log(firstOperand); 
    console.log(secondOperand);

    if(!operator) {
        operator = buttons;
        numOneOccupied  = true;
        isOperatorSelected = true;
    }
    else if (isOperatorSelected) {
        operator = buttons;
    } else  if(operator === '/' && secondOperand === '0'){
        console.log('taa');
        display.value = 'NaN';
        displayNaN = true;
        return;
    }
    else if(operator && firstOperand && secondOperand)
    {
        display.value = '';
        result = String(+operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand)).toFixed(2));
        displayValue(result);
        operator = buttons;
        firstOperand = result;
        secondOperand = '';  
        secondOperandTurn = true;
    }
  
})

calculate.addEventListener('click', () => {
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);

    if(firstOperand && secondOperand && operator)
    {
        display.value = "";
        result = String(+operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand)).toFixed(2));
        displayValue(result);
    }
    else 
    {
        displayInitialValue()
    }
}) 

const clearBtn = document.querySelector('#clearBtn');

clearBtn.addEventListener('click', () => {

    firstOperand = '';
    secondOperand = '';
    operator= '';
    firstOperandTurn = true;
    displayNaN = false;
    secondOperandTurn = true;
    numOneOccupied  = false;
    operatorSelected = false;
    displayInitialValue();
})