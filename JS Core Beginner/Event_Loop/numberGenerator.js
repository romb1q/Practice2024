// 3 task

function randomTime() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const delay = randomNumber * 1000;

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(`Успешно. Число ${randomNumber}, задержка: ${delay / 1000}с.`);  // Успешно. Число 3, задержка: 3с.
            } else {
                reject(new Error(`Ошибка. Число ${randomNumber}, задержка: ${delay / 1000}с.`));  // Ошибка. Число 7, задержка: 7с.
            }
        }, delay);
    });
}

randomTime()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
    });
