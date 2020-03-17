function fibonacci(number) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (number < 0) {
        return -1;
    } else if ((number === 0) || (number === 1)) {
        return number;
    } else {
        for (let i = 2; i < number; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

function inputNumberToCheck() {
    inputNumber = parseInt(prompt(
        "Enter a number to check: "));
    return inputNumber;
}

function isFibonacci() {
    let fibonacciArray = [];
    let index = 0;
    let numberToCheck = inputNumberToCheck();
    while (index < 1000) {
        index++;
        fibonacciArray.push(fibonacci(index));
        for (let i = 0; i < fibonacciArray.length; i++) {
            if (fibonacciArray[i] === numberToCheck) {
                return true;
            }
        }
    }
    return false;
}

function displayResult() {
    if (isFibonacci()) {
        alert("Your number is in Fibonacci List");
    } else {
        alert("Your number is not in Fibonacci List");
    }
}