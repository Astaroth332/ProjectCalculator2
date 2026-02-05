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

function displayInitialValue(){
    display.value = 0;
}

displayInitialValue()

numberButtonsContainer.addEventListener('click', (e) => {
    let buttons = e.target.id;

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
        secondOperand+=buttons;
        displayValue(buttons);
    }
});

let operatorSelected = false;
let resultFromPreviousExpression = 0;
let result = '';

operatorButtonsContainer.addEventListener('click' , (e) => {
    let buttons = e.target.id;
    console.log(buttons);
    console.log(firstOperand); 
    console.log(secondOperand);


    if (operator && operatorSelected) {
        operator = buttons;
        numOneOccupied  = true;
    }

    if(!operator) {
        operator = buttons;
        numOneOccupied  = true;
        operatorSelected = true;
    }
    else if (operator && firstOperand && secondOperand)
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






