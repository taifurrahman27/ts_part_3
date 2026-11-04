//* Inheritance: a Manager is an Employee with an additional responsibility.
class Employee {
    name;
    _basicSalary;
    constructor(name, _basicSalary) {
        this.name = name;
        this._basicSalary = _basicSalary;
    }
    // get basicSalary(): number {
    //   return this._basicSalary;
    // }
    set basicSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._basicSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this._basicSalary}`;
    }
}
class Manager extends Employee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(name: string, _basicSalary: number, teamMemberCount: number) {
    //   super(name, _basicSalary);
    //   this.teamMemberCount = teamMemberCount;
    // }
    constructor(name, _basicSalary, teamMemberCount) {
        super(name, _basicSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this.
            _basicSalary} and manages ${this.teamMemberCount} people`;
    }
}
const employee = new Employee("Taifur", 23000);
console.log(employee.describe());
const manager = new Manager("Jasim", 29000, 30);
console.log(manager.describeWork());
console.log(manager.describeManager());
export {};
