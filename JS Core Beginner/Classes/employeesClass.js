// 3 task

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getYearSalary() {
        return `Годовая зарплата работника: ${this.salary * 12}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    getYearSalary() {
        return `Годовая зарплата менеджера: ${(this.salary * 12) + this.bonus}`;
    }
}

const employee1 = new Employee("Роман", 1200);
const employee2 = new Manager("Павел", 1400, "Кадровый", 200);

console.log(employee1.getYearSalary()); // Годовая зарплата работника: 14400

console.log(employee2.getYearSalary()); // Годовая зарплата менеджера: 17000
