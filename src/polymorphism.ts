// Polymorphism: different employees respond differently to the same method call.

class Employee {
  constructor(
    public name: string,
    protected _basicSalary: number,
  ) {}

  get basicSalary(): number {
    return this._basicSalary;
  }

  set basicSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._basicSalary = newSalary;
  }

  calculatePay(taxRate: number) {
    return this.basicSalary - this.basicSalary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay(taxRate: number) {
    return this.basicSalary + 5000 - this.basicSalary * taxRate;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _basicSalary: number,
    public type: string,
  ) {
    super(name, _basicSalary);
  }

  override calculatePay(taxRate: number) {
    return this.basicSalary + 3000 - this.basicSalary * taxRate;
  }
}

const employee = new Employee("Taifur", 23000);
const manager = new Manager("Jasim", 26000);
const developer = new Developer("Tasim", 30000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay(0.1));
console.log(developer.calculatePay(0.1));