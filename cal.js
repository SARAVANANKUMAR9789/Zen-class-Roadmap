const calculator = document.createElement('buttons');
calculator.classList.add('calculator');

const result = document.createElement('input');
result.type = 'text';
result.readOnly = true;

calculator.appendChild(result);

const buttons = ['7', '8', '9', '+','4', '5', '6', '-','1', '2', '3', '*','0', '/', '=', 'C'];

buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.addEventListener('click', () => handleButtonPress(label));
  calculator.appendChild(button);
});

document.body.appendChild(calculator);

let expression = '';

function handleButtonPress(label) {
  switch (label) {
    case '=':
      calculate();
      break;
    case 'C':
      clearResult();
      break;
    default:
      addToExpression(label);
  }
}

function addToExpression(value) {
  expression += value;
  result.value = expression;
}

function calculate() {
  try {
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  expression = '';
  result.value = '';
}

document.addEventListener('keydown', event => {
  const key = event.key;
  const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','+', '-', '*', '/', '=','Enter', 'Backspace', 'Escape','Delete'];
  if (allowedKeys.includes(key)) {
    event.preventDefault();

    switch (key) {
      case 'Enter':
      case '=':
        handleButtonPress('=');
        break;
      case 'Backspace':
        clearResult();
        break;
      case 'Escape':
        clearResult();
        break;
      case 'Delete':
        clearResult();
        break;  
      default:
        handleButtonPress(key);
    }
  }
});