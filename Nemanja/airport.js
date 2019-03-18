(function () {


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + ' ' + this.surname;
    }

    var mirko = new Person('Mirko', 'Zivanovic');
    var slavko = new Person('Slavko', 'Jankovic');
    var milica = new Person('Milica', 'Jankovic');
    var dragana = new Person('Dragana', 'Zivanovic');



    function Seat(number, category) {
        this.number = !number || typeof number === "string"
            ? Math.floor(Math.random() * 90) + 10
            : number;

        this.category = !category ? 'e' : category;
    }

    Seat.prototype.getData = function () {
        return this.number + ', ' + this.category.toUpperCase();
    }

    var e1 = new Seat(12, 'b');
    var b8 = new Seat(12, null);
    var e34 = new Seat(null, 'b');
    var b9 = new Seat(13, null)


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }

    Passenger.prototype.getData =
        this.getData = function () {
            return this.seat.getData() + ' ' + this.person.getData()
        }

    var pass1 = new Passenger(mirko, e1);
    var pass2 = new Passenger(dragana, e34);
    var pass3 = new Passenger(slavko, b8);
    var pass4 = new Passenger(milica, b9);


    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date).toDateString();
        this.listPassangers = [];

    }

    Flight.prototype.addPassangers = function (passanger) {
        this.listPassangers.push(passanger);
    }

    Flight.prototype.numOfPass = function () {
        var num = this.listPassangers.length;
        return num;
    };

    Flight.prototype.getData = function () {
        var str = ''
        str += this.date + ', ' + this.relation + '\n';
        for (var i = 0; i < this.listPassangers.length; i++) {
            str += this.listPassangers[i].getData() + '\n'
        }
        return str;
    }

    var bgny = new Flight('Belgrade - NewYork', 'Oct / 12 / 2019');
    bgny.addPassangers(pass1);
    bgny.addPassangers(pass2);
    var bgpr = new Flight('Belgrade - Paris', 'Oct / 15 / 2019')
    bgpr.addPassangers(pass3);
    bgpr.addPassangers(pass4);


    function Airport() {
        this.name = 'Nikola Tesla';
        this.listOfFlights = []
    }

    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    Airport.prototype.getData = function () {
        var num = 0
        var str = 'Airport: ';
        str += this.name + ', total passangers: '
        for (var i = 0; i < this.listOfFlights.length; i++) {
            num += this.listOfFlights[i].numOfPass()
        }
        str += num + '\n'
        for (var i = 0; i < this.listOfFlights.length; i++) {
            str += '   ' + this.listOfFlights[i].date + ', ' + this.listOfFlights[i].relation + '\n';
            for (var j = 0; j < this.listOfFlights[i].listPassangers.length; j++) {
                str += '        ' + this.listOfFlights[i].listPassangers[j].getData() + '\n'
            }
        }
        return str
    }

    var nikolaTesla = new Airport()
    nikolaTesla.addFlight(bgny);
    nikolaTesla.addFlight(bgpr);
    console.log(nikolaTesla.getData())


})();

