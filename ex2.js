let numberArray = [12, 34, 67, 45, 2, 67, 102, 3, 56];

function inputCheckNumber() {
    inputNumber = parseInt(prompt("Enter an Integer number: "));
    return inputNumber;
}

function tryRemoveFromArray(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function displayArray() {
    alert("Your old number array is: " + numberArray);
    alert("Your new number array is: " + tryRemoveFromArray(numberArray, inputCheckNumber()));
}