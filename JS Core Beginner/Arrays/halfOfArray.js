// 2 task

function sumOfArraysHalf(array) {
    let sum = 0;
    let firstHalf = array.length / 2;
    for (let i = 0; i < firstHalf; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumOfArraysHalf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));  // 36
