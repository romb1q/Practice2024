// 1 task
const global_z = 1;  // глобальная область видимости


function someFunc() {  // локальная область видимости
    let x = 2;
    var y = 3;
    const z = 4;
    
    for (let i = 0; i < 10; i++) {  // локальная область видимости
        let local_x = 2;
        var local_y = 3;
    }
    console.log(local_x);  // ReferenceError: local_x is not defined
    console.log(local_y);  // 3
}
someFunc();


console.log(global_z);  // 1
console.log(z, x, y);   // ReferenceError: z is not defined  and  ReferenceError: x is not defined  and  ReferenceError: y is not defined
