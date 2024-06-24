// 1 task

const isNumberInteger = (num) => {
    try {
        if (!Number.isInteger(num)) {
            // Выдача пользовательской ошибки
            throw new Error("The provided number is not an integer.");
        }
        else {
            return true;
        }
    } catch (error) {
        return error.message;
    }
}

console.log(isNumberInteger(5.9));  // The provided number is not an integer.
console.log(isNumberInteger(5));  // true
