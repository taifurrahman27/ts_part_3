//* Inheritance: a Manager is an Employee with an additional responsibility.

class Employee {
  constructor(
    public name: string,
    protected _basicSalary: number,
  ) {}

  // get basicSalary(): number {
  //   return this._basicSalary;
  // }

  set basicSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._basicSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this._basicSalary}`;
  }
}

class Manager extends Employee {
  // teamMemberCount: number;
  // constructor(name: string, _basicSalary: number, teamMemberCount: number) {
  //   super(name, _basicSalary);
  //   this.teamMemberCount = teamMemberCount;
  // }
  constructor(
    name: string,
    _basicSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _basicSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this.
        _basicSalary} and manages ${this.teamMemberCount} people`;
  }
}

const employee = new Employee("Taifur", 23000);

console.log(employee.describe());

const manager = new Manager("Jasim", 29000, 30);

console.log(manager.describeWork());
console.log(manager.describeManager());