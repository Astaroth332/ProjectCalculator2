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

let firstOperand = '', secondOperand = '', operator = '';

const numberButtonsContainer = document.querySelector('.numbersContainer');
const display = document.querySelector('#displayInput');
const calculate = document.querySelector('#equal');
const operatorButtonsContainer = document.querySelector('.operatorsContainer');

let numOneOccupied = false;
let secondOperandTurn = true;

numberButtonsContainer.addEventListener('click', (e) => {
    let buttons = e.target.id;

    if(!numOneOccupied) {
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

operatorButtonsContainer.addEventListener('click' , (e) => {
    let buttons = e.target.id;
    console.log(buttons);
    if(!operator) {
        operator = buttons;
        numOneOccupied  = true;
    }
})

function convertToNumber(number) {
    return parseFloat(number);
}

function displayValue(str) {
    display.value +=str;
}



calculate.addEventListener('click', () => {
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);

    if(firstOperand && secondOperand && operator)
    {
        display.value = "";
        let result = operate(convertToNumber(firstOperand),operator, convertToNumber(secondOperand));
     
        displayValue(result);
    }
    
}) 






