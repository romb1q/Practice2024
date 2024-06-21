// 1 task

function tenPercentArray(array) {
    return array.map(el => el * 1.1)
}

console.log(tenPercentArray([1, 2, 3, 4, 5]));  // [1.1, 2.2, 3.3, 4.4, 5.5]
