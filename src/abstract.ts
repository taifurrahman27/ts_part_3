// Abstraction: every employee must define how their pay is calculated.

abstract class Employee {
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

  abstract calculatePay(): number;
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
