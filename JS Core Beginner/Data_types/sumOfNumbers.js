// 3 task

function sumOfNumbers(num) {
    let numStr = num.toString();
    let firstNum = parseInt(numStr[0]);
    let lastNum = parseInt(numStr[numStr.length - 1]);
    return firstNum + lastNum
}
console.log(sumOfNumbers(3432124412432)); // 5
