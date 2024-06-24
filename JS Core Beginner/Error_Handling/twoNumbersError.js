// 3 task

function isSecondNumberNull(num1, num2) {
    try {
        if (num2 !== 0) {
            return console.log(`Первое число: ${num1}, Второе число: ${num2}`);
        }
        else {
            throw new Error('Второе число равно нулю');
        }
    } catch (error) {
        console.error(error.message);
    }
}

isSecondNumberNull(2,1);  // Первое число: 2, Второе число: 1
isSecondNumberNull(2,0);  // Второе число равно нулю
