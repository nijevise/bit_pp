class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName() {
        return `${this.name} ${this.surname}`;
    }

}




class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return `${super.fullName()}, ${this.salary}`;
    }


    getSalary() {
        return this.salary
    }
    increaseSalary() {
        this.salary = (this.salary * 0.1) + this.salary;
        return this.salary;
    }
}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary)
        this.specialization = specialization;
    }
    getSpecialization() {
        return this.specialization;
    }
}




class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
    changeDepartment(newDepartment) {
        return this.department = newDepartment;
    }
}




var sonja = new Person('sonja', 'vadleve');
console.log(sonja);

var mika = new Employee('mika', 'mikic', 'prodavac', 25000);
console.log(mika);

console.log(mika.increaseSalary());