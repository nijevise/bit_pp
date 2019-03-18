(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    function Employee(name, surname, job, salary) {
        Person.call(this, name, surname);
        this.job = job;
        this.salary = salary;
    }

    Employee.prototype.getData = function () {
        return this.name + this.surname + this.salary
    }

    Employee.prototype.getSalary = function () {
        console.log(this.salary);
    }

    Employee.prototype.increaseSalary = function () {
        return this.salary = (this.salary * 0.1) + this.salary
    }

    function Developer(name, surname, job, salary, specialization) {
        Employee.call(this, name, surname, job, salary);
        this.specialization = specialization;
    }

    Developer.prototype.getSpecialization = function () {
        console.log(this.specialization)
    }

    function Manager(name, surname, job, salary, department) {
        Employee.call(this, name, surname, job, salary);
        this.department = department;
    }

    Manager.prototype.getDepartment = function () {
        console.log(this.department);
    }

    Manager.prototype.changeDepartment = function (department) {
        return this.department = department;
    }

    // var pera = new Person("Pera", "Peric");
    // console.log(pera);
    // var employee1 = new Employee("Sima", "Simic", "driver", 30000);
    // console.log(employee1);
    // var developer1 = new Developer("Zika", "Zikic", "programmer", "100000", "softwareDeveloper");
    // console.log(developer1);
    // var managerTop = new Manager("Marko", "Arsic", "Boss", "1 million", "IT");
    // console.log(managerTop);
    // employee1.increaseSalary();
    // console.log(employee1);

})();   