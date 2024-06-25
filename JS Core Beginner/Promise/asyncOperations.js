// 1 tsask

function operation(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Операция ${num}`);
            resolve(num);
        }, 1000);
    });
}

async function runSequense(operations) {
    for (const operation of operations) {
        await operation();
    }
    console.log('Готово');
}

const operationsArray = [
() => operation(1),
() => operation(2),
() => operation(3)
];

runSequense(operationsArray);

// Операция 1
// Операция 2
// Операция 3
// Готово
