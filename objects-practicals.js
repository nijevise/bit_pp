/* 1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
*/

// var firstCoffee = {
//     name: "Mocka",
//     strength: "strong",
//     flavour: "intensive",
//     milk: false,
//     sugar: "No",

// }
// console.log(firstCoffee.sugar);

// /* 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/
// var firstMovie = {
//     title: "BREAKING THE WAVES",
//     actors: " Emily Watson",
//     actors1: ["Stellan Skarsgård", 8],
//     director: "Lars von Trier",
//     genre: "drama",
//     popularity: 4.371,
// };
// //console.log(firstMovie.actors1);
// console.log(Object.values(firstMovie));

/* 3. Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository, a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not.
*/

// function program(a, b, c, d) {
//     var firstProgram = {
//         description: a,
//         programmingLanguage: b,
//         gitRepository: c,
//         boolean: d,
//         printRepository: function () {
//             console.log(this.gitRepository)
//         },
//         checkLenguage: function (programmingLanguage) {
//             if (this.programmingLanguage === "JavaScript") {
//                 console.log("Program is written in JavaScript")
//             } else {
//                 console.log("Program is not written in JavaScript")
//             }
//         },
//         chackStatus: function (d) {
//             if (this.boolean) {
//                 console.log("It is copmleted");
//             } else {
//                 console.log("It is not copmleted");
//             }
//         }
//     };
//     return firstProgram
// };
// console.log(program('oops', 'Java', 'MarinaPesic', true));



/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients.
*/


///////////////////////////////////////////////////////////////////////////////////

function Person(name, id) {
    this.personName = name;
    this.personId = id;
    this.getPersonInfo = function () {
        return this.personName + " " + this.personId;
    }
}

function Car(model) {
    this.model = model;
    this.speed = 0;
    this.passangers = [];
    this.driver = null;
    this.engineRunning = false;

    this.addDriver = function (person) {
        this.driver = person;
    }

    this.addPassanger = function (passangers) {
        this.passangers[this.passangers.length] = passangers;
        //console.log(passangers)
    }

    this.printPassangers = function () {
        var info = '';
        for (var i = 0; i < this.passangers.length; i++) {
            // info[this.passangers[i]] += this.passangers[i].getPersonInfo();
            info += this.passangers[i].getPersonInfo() + ", ";
        }
        return info;
    }
    this.startCar = function () {
        if (!this.driver) {
            console.log("There is no driver in the car!!");
            return;
        }

        this.engineRunning = true;
        console.log("Car started!!");

    }

    this.stopCar = function () {
        this.engineRunning = false;
        console.log("Speed is: " + this.speed + '. Passengers are ' + this.printPassangers() + '. Driver is ' + this.driver.personName + '.');
    }

}


var pera = new Person("Pera Peric", 123456);
var mika = new Person("Mika Mikic", 987654);
var zika = new Person("Zika Zikic", 6757566);
var laza = new Person("Laza Lazarevic", 234324325);

var honda = new Car("Honda");

honda.addDriver(mika);
honda.addPassanger(pera);
honda.addPassanger(zika);
honda.addPassanger(laza);

honda.startCar();
honda.stopCar();

// 3. Write a JavaScript program to get the length of an JavaScript object.Go to the editor
// Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(student.length);