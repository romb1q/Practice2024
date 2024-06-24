// 1 task

class Human {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    info() {
        return `Имя: ${this.name}, Возраст: ${this.age}, Страна проживания: ${this.country}`;
    } 
}

const person1 = new Human("Роман", 20, "Беларусь");
const person2 = new Human("Аркадий", 3, "США");
const person3 = new Human("Матвей", 43, "Зимбабве");

console.log(person1.info());  // Имя: Роман, Возраст: 20, Страна проживания: Беларусь
