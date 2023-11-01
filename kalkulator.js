const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = nul;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay()
    });
}

function inputDigit(digit) {
    if(calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

button.addEventListener('click', function(event) {

    //mendapatkan objek elemen yanng diklik
    const target = event.target;

    if(target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
    }
    if(target.classList.contains('negative')) {
        clearCalculator();
        updateDisplay();
        return;
    }
    if(target.classList.contains('equals')) {
        clearCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
    }

    inputDigit(target.innerText);
    updateDisplay()
});

function ineverseNumber() {
    if(calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = (parseFloat(calculator.displayNumber) * -1).toString();
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function performCalculator() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = '0';
    const first = parseFloat(calculator.firstNumber);
    const second = parseFloat(calculator.displayNumber);

    if (calculator.operator === "+") {
        result = first + second;
    } else if (calculator.operator === "-") {
        result = first - second;
    } else if (calculator.operator === "*") {
        result = first * second;
    } else if (calculator.operator === "/") {
        if (second === 0) {
            alert("Angka 0 tidak diperbolehkan");
            clearCalculator();
            updateDisplay();
            return;
        }
        result = first / second;
    }

    calculator.displayNumber = result.toString();
}
