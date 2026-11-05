// Abstraction: every employee must define how their pay is calculated.
class Employee {
    name;
    _basicSalary;
    constructor(name, _basicSalary) {
        this.name = name;
        this._basicSalary = _basicSalary;
    }
    get basicSalary() {
        return this._basicSalary;
    }
    set basicSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._basicSalary = newSalary;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.basicSalary + 5000;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.basicSalary + 3000;
    }
}
const manager = new Manager("Jasim", 26000);
const developer = new Developer("Tasim", 30000);
console.log(`${manager.name}: ${manager.calculatePay()}`);
console.log(`${developer.name}: ${developer.calculatePay()}`);
export {};
