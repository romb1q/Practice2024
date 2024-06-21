// 1 task

function callback() {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber / 2);
}
setInterval(callback, 1000);
/*

1
3
2.5
2
0.5
1.5
4.5
2.5
3.5

*/
