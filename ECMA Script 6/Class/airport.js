(function () {
    'use strict';

    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    }

    Person.prototype.getDataPerson = function () {
        return `${this.name} ${this.surname}`;
    }

    class Seat {
        constructor(number, category) {
            this.number = number || Math.floor(Math.random() * (100 - 10) + 10);
            this.category = category || "e";
        }
    }

    Seat.prototype.getDataSeat = function () {
        return `${this.number}, ${this.category.toUpperCase()}`;
    }

    class Passenger {
        constructor(person, seat) {
            this.person = person;
            this.seat = seat;
        }
    }

    Passenger.prototype.getDataPassenger = function () {
        return `${this.seat.getDataSeat()}, ${this.person.getDataPerson()}`;
    };

    class Flight {
        constructor(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPassengers = [];
        }
    }


    Flight.prototype.addPassenger = function (passenger) {
        this.listOfPassengers.push(passenger);
    }

    Flight.prototype.getDataFlight = function () {
        let infoPasengers = "";
        this.listOfPassengers.forEach(function (element) {
            infoPasengers += `
        ${ element.getDataPassenger()}`
        });

        const formattedDate = `${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}`;

        return `${formattedDate} ${this.relation} ${infoPasengers}`;
    }

    class Airport {
        constructor(name) {
            this.name = name;
            this.listOfFlights = [];
        }
    }

    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    Airport.prototype.getDataAirport = function () {
        let allFlights = 0;
        this.listOfFlights.forEach(function (element) {
            allFlights += element.listOfPassengers.length;
        });

        let allFlightInformation = "";

        this.listOfFlights.forEach(function (element) {
            allFlightInformation += `${element.getDataFlight()}
        `
        });


        return `${"Airport: "}
        ${ this.name}, ${"total passengers: "} ${allFlights}
        ${ allFlightInformation}
        `;
    }





    function createFlight(relation, data) {
        return new Flight(relation, data);
    };



    const sonja = new Person("Sonja", "Vadleve");
    const marija = new Person("Marija", "Prokic");
    // console.log(sonja.getDataPerson());

    const seatFirst = new Seat(56, 'B');
    const seatSecond = new Seat(55, 'B');
    // console.log(seatFirst.getDataSeat());

    const passenger1 = new Passenger(sonja, seatFirst);
    const passenger2 = new Passenger(marija, seatSecond);
    // console.log(passenger1.getDataPassenger());

    const atinaFlight = createFlight("Belgrade - Atina", "10.25.2017.");
    const viennaFlight = createFlight("Vienna - Belgrade", "05.30.2019.");
    viennaFlight.addPassenger(passenger1);
    viennaFlight.addPassenger(passenger2);
    atinaFlight.addPassenger(passenger1);
    atinaFlight.addPassenger(passenger2);
    //console.log(atinaFlight.getDataFlight());

    const airportNikolaTesla = new Airport("Nikola Tesla");
    airportNikolaTesla.addFlight(atinaFlight);
    airportNikolaTesla.addFlight(viennaFlight);
    console.log(airportNikolaTesla.getDataAirport());

    // console.log(seatFirst.number);
    // console.log(seatFirst.category);
    console.log("Airport day!");
})();