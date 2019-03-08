
(function () {


    function Genre(name) {
        var acronym;
        this.name = name;
        this.getGenre = function () {
            acronym = this.name[0] + this.name[name.length - 1].toUpperCase();
            return acronym;

        }
    }


    function Movie(title, duration, genre) {
        this.title = title;
        this.genre = genre;
        this.duration = duration

        this.getData = function () {
            return this.title + ", " + this.duration + " min" + ", " + this.genre.getGenre()
        }
    };




    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.NumOfMovies = this.listOfMovies.length;
        this.totalDurationPerProgram = function () {
            var totalProgramDuration = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalProgramDuration += this.listOfMovies[i].duration;

            } return totalProgramDuration;
        };

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie)
        }

        this.addData = function () {
            var str = ''
            var str = this.date + ", " + this.totalDurationPerProgram() + "\n"

            for (var i = 0; i < this.listOfMovies.length; i++) {
                str += this.listOfMovies[i].getData() + "\n"
            }

            return str
        }
    }


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesAll = 0;


        this.addProgram = function (program) {
            this.listOfPrograms.push(program)
        }

        this.getData = function () {
            var str = "";
            str += this.name + "has" + this.listOfPrograms[0].listOfMovies.length + "movie titles \n"
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                str += this.listOfPrograms[i].date + ", " + " program duration " + this.listOfPrograms[i].totalDurationPerProgram() + "min \n"
                for (var j = 0; j < this.listOfPrograms[i].listOfMovies[j]; j++) {
                    str += this.listOfPrograms[i].listOfMovies[j].getData();
                }
            }
            return str
        }

    }

    var horror = new Genre('Horror');
    var fantasy = new Genre('Fantasy');
    var drama = new Genre('Drama');
    var music = new Genre('Music');
    var firstMovie = new Movie("Once Upon a Time in America", 229, horror);
    var secondMovie = new Movie("Upside Down", 229, fantasy);
    var thirdMovie = new Movie("Billy Elliot", 110, music);
    var forthMovie = new Movie("Breaking the Waves", 159, drama);
    var firstProgram = new Program("Oct / 2 / 2019");
    firstProgram.addMovie(firstMovie);
    firstProgram.addMovie(secondMovie);
    var secondProgram = new Program("Oct / 3 / 2019");
    secondProgram.addMovie(thirdMovie);
    secondProgram.addMovie(forthMovie);
    var fest = new Festival('Fest');
    console.log(firstProgram.listOfMovies.length)
    console.log(firstProgram.date)
    console.log(firstProgram.addData())
    console.log(fest.getData())

})();