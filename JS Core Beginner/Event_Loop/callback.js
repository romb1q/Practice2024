// 1 task

function runCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

runCallback(() => {
    console.log('Вызов callback');
});

