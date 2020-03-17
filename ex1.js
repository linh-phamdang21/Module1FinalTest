let markArray = [10, 6, 8, 8.5, 3, 9, 7];

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function displayMark() {
    alert("Mark Array is: " + markArray);
    alert("The Highest Mark in array is: " + findMax(markArray));
}
