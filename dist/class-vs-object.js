class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}
const employee = new Employee("Taifur", 19000);
const employee2 = new Employee("Jasim", 29000);
console.log(employee);
console.log(employee2);
console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
