// 1 task

const IPhone = new Object({
    name: 'iPhone',
    price: 1000,
    color: 'black',
    screenSize: 5.5
});

const Samsung = {
    name: 'Samsung',
    price: 1000,
    color: 'white',
    screenSize: 5.5
};

function compareObjects(firstObject, secondObject) {
    const keys = Object.keys(secondObject);
    let valuesCounter = 0;

    for (let key of keys) {
        if (firstObject.hasOwnProperty(key)) {
            if (firstObject[key] === secondObject[key]) {
                valuesCounter++;
            }
        }
    }
    return valuesCounter;
}


console.log(compareObjects(IPhone, Samsung)); // 2
