//* Encapsulation: protect a state and change it through methods. 
//* Access Modifier
//? Public
//? Private
//? Protected
//? Readonly
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
    getSalaryWithBonus() {
        return this._basicSalary + 6000;
    }
    set basicSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._basicSalary = newSalary;
    }
}
const employee = new Employee("Taifur", 23000);
const employee2 = new Employee("Jasim", 20000);
console.log(`${employee.name}'s salary: $${employee.basicSalary}, with bonus: $${employee.getSalaryWithBonus()}`);
console.log(`${employee2.name}'s salary: $${employee2.basicSalary}, with bonus: $${employee2.getSalaryWithBonus()}`);
export {};
