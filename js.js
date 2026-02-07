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
        if(display.value === '0' && display.value.length >= 1) {
            display.value = '';
            firstOperandTurn = false;
        }

        if(buttons === '.' && firstOperand.includes('.')) {
            const dotButtons = document.querySelector('#.');
            dotButtons.disable = true;
            return;
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

        if(buttons === '.' && secondOperand.includes('.')) {
            const dotButtons = document.querySelector('#.');
            dotButtons.disable = true;
            return;
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
    console.log("first op" + firstOperand);
    console.log("second op" + secondOperand);
    console.log("operator" + operator);


    if(!operator) 
    {
 
        operator = buttons;
        numOneOccupied  = true;
        isOperatorSelected = true;
    }
    else if (isOperatorSelected) 
    {
        operator = buttons;
    } 
    else  if(operator === '/' && secondOperand === '0') {
        console.log('taa');
        display.value = 'NaN';
        displayNaN = true;
        return;
    }
    else if (resultCameFromEqual && deleteOnResult)
    {
        console.log('ito');
        display.value = '';
        displayValue(result);
        operator = buttons;
        firstOperand = result;
        result = '';
        secondOperand = '';  
        secondOperandTurn = true;
        resultCameFromEqual = false;
        deleteOnResult = false;
    }
    else if(deleteOnResult)
    {
        console.log('ito dapat');
        display.value = '';
        firstOperand = result;
        result = String(+operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand)).toFixed(2));
        displayValue(result);
        operator = buttons;
        firstOperand = result;
        secondOperand = '';  
        secondOperandTurn = true;
        deleteOnResult = false;
    }
    else if(operator && firstOperand && secondOperand)
    {
        console.log('ito')
        display.value = '';
        result = String(+operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand)).toFixed(2));
        displayValue(result);
        operator = buttons;
        firstOperand = result;
        secondOperand = '';  
        secondOperandTurn = true;
    }
    
  
})
let resultCameFromEqual = false;

calculate.addEventListener('click', () => {
    console.log("first op " + firstOperand);
    console.log("second op " + secondOperand);
    console.log("operator " + operator);

    if(firstOperand && secondOperand && operator)
    {
        display.value = "";
        result = String(+operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand)).toFixed(2));
        console.log("result " + result);
        secondOperand = '';
        resultCameFromEqual = true;
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

const delBtn = document.querySelector('#delBtn');
let deleteOnResult = false;

delBtn.addEventListener('click', () => {

    if(!numOneOccupied && firstOperand.length > 1 && result.length <= 0)
    {
        let arr = firstOperand.split('')
        arr.pop()
        firstOperand = arr.join('');
        display.value = firstOperand;
        console.log(firstOperand);
    }
    else if (numOneOccupied && secondOperand.length > 1 && result.length <= 0)
    {
        let arr = secondOperand.split('')
        arr.pop()
        secondOperand = arr.join('');
        display.value = secondOperand;
        console.log(secondOperand);
    }
    else if (result.length > 1)
    {
        let arr = result.split('')
        arr.pop()
        result = arr.join('');
        display.value = result;
        deleteOnResult = true;
        console.log(result);
    }
    else
    {
        displayInitialValue()
        console.log('ito')
        return;
    }
})