// 2 task

function checkProperty(obj, prop) {
    try {
        let value = obj[prop];
        return value;
    } catch (error) {
        if (error instanceof TypeError) {
            return `TypeError: '${prop}' не существует`;
        } else {
            throw error;
        }
    }
}

// Примеры использования функции
let obj1 = { name: "Паша", age: 36 };
let obj2;

console.log(checkProperty(obj1, "name")); // Паша
console.log(checkProperty(obj2, "name")); // TypeError: 'name' не существует
