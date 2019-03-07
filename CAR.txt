
// function createPerson(personName, personID) {
//     return {
//         name: personName,
//         id: personID,
//         getPersonInfo: function () {
//             return this.name + " " + this.id;
//         }
//     }
// }

function Person(personName, personID) {
    this.id = personID;
    this.name = personName;

    this.getPersonInfo = function () {
        return this.name + " " + this.id;
    }
}

function createCar(model) {
    this.model = model;
    this.driver = null;
    this.passengers = [];
    this.speed = 0;
    this.engineRunning = false;

    this.addPassengers = function (passenger) {
        this.passengers[this.passengers.length] = passenger;
    };

    this.setDriver = function (driver) {
        if (!this.driver) {
            this.driver = driver;
        }
        else {
            console.log("We have driver!");
        };
    };

    this.startCar = function () {
        if (!this.driver) {
            console.log("There is no driver!!!!");
            return;
        }
        else {
            this.engineRunning = true;
            console.log('Car started!');
        }

    };

    this.stopCar = function () {
        if (this.speed === 0) {
            this.engineRunning = false;
            console.log("car is not running .")
        }
        else {
            console.log("Car is running.");
        }
    };

    this.printInfo = function () {
        var namePassengers = "";
        for (var i = 0; i < this.passengers.length; i++) {
            namePassengers += this.passengers[i].getPersonInfo() + " ";
        }

        console.log("Driver: " + this.driver.getPersonInfo() + " is driving " + this.model + " speed is: " + this.speed + " with passengers: " + namePassengers + " car is " + (this.engineRunning ? 'running' : 'not running'));

    };
};

var marko = new Person("marko", 1122334456706);
var milos = new Person("milos", 1615253979584);
var bojan = new Person("bojan", 1234567891234);

var mercedes = new createCar("mercedes");

mercedes.setDriver(marko);
mercedes.addPassengers(milos);
mercedes.addPassengers(bojan);

mercedes.startCar();
mercedes.stopCar();
mercedes.printInfo();