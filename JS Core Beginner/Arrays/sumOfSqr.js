// 3 task

function sumOfSqr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * array[i];
    }
    return sum;
}

console.log(sumOfSqr([1,2,3,4,5,6,7]));  // 140
