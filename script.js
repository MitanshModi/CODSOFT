document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.dataset.value;
            if (value === undefined) return;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                operator = null;
                firstOperand = null;
                display.textContent = '';
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstOperand = parseFloat(currentInput);
                currentInput = '';
            }
        });
    });

    document.getElementById('equals').addEventListener('click', function() {
        if (operator && firstOperand !== null) {
            const secondOperand = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }

            display.textContent = result;
            currentInput = result.toString();
            operator = null;
            firstOperand = null;
        }
    });
});