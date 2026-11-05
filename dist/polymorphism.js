// Polymorphism: different employees respond differently to the same method call.
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
    calculatePay(taxRate) {
        return this.basicSalary - this.basicSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay(taxRate) {
        return this.basicSalary + 5000 - this.basicSalary * taxRate;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _basicSalary, type) {
        super(name, _basicSalary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.basicSalary + 3000 - this.basicSalary * taxRate;
    }
}
const employee = new Employee("Taifur", 23000);
const manager = new Manager("Jasim", 26000);
const developer = new Developer("Tasim", 30000, "Backend");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay(0.1));
console.log(developer.calculatePay(0.1));
export {};
