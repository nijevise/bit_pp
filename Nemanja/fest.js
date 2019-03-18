

(function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getInfo = function () {
        name = this.name.split("");
        var genInfo = [];
        genInfo.push(name[0]);
        genInfo.push(name[name.length - 1]);
        genInfo = genInfo.join("").toUpperCase();

        return genInfo;
    }

    var horror = new Genre('horror');
    var action = new Genre('action');
    var drama = new Genre('drama');


    function Movie(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genreAcr = genre.getInfo();
    }

    Movie.prototype.getData = function () {
        return this.title + ' ' + this.duration + 'min' + ' ' + this.genreAcr
    };

    var firstMov = new Movie('Halloween', 90, horror);
    var secondMov = new Movie('Ring', 120, horror);
    var thirdMov = new Movie('Titanic', 210, drama);
    var forthMov = new Movie('Mr.Riplay', 180, drama);
    var fifthMov = new Movie('Tetminator', 130, action);
    var sixthMov = new Movie('Rambo', 95, action);


    function Program(date) {
        this.date = new Date(date).toDateString();
        this.listOfMovies = [];
    }

    Program.prototype.totalNumOfMovies = function () {
        var num = this.listOfMovies.length
        return num
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie)
    }

    Program.prototype.totalDurationPerProgram = function () {
        var totalProgramDuration = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            totalProgramDuration += this.listOfMovies[i].duration;
        }
        return totalProgramDuration + 'min';
    }

    Program.prototype.addData = function () {
        var str = '';
        str = this.date.getFullYear() + '.' + this.date.getMonth() + '.' + this.date.getDate() + ', ' + this.totalDurationPerProgram() + '\n';
        for (var i = 0; i < this.listOfMovies.length; i++) {
            str += this.listOfMovies[i].getData() + '\n'
        }
        return str
    }

    var firstProgram = new Program('Oct / 2 / 2019');
    var secondProgram = new Program('Oct / 3 / 2019');
    var thirdProgram = new Program('Oct / 4 / 2019');
    firstProgram.addMovie(firstMov);
    firstProgram.addMovie(secondMov);
    secondProgram.addMovie(thirdMov);
    secondProgram.addMovie(forthMov);
    thirdProgram.addMovie(fifthMov);
    thirdProgram.addMovie(sixthMov);

    function Festival(name) {
        this.name = name
        this.programs = [];
        this.numOfMoviesInPrograms = 0
    }

    Festival.prototype.addProgram = function (program) {
        this.programs.push(program);
    }

    Festival.prototype.getData = function () {
        str = ''
        var num = 0
        for (var i = 0; i < this.programs.length; i++) {
            num += this.programs[i].totalNumOfMovies()
        }
        str += this.name + ' has ' + num + ' movie titles \n';
        for (var i = 0; i < this.programs.length; i++) {
            str += this.programs[i].date + ', ' + ' program duration: ' + this.programs[i].totalDurationPerProgram() + '\n'
            for (var j = 0; j < this.programs[i].listOfMovies.length; j++) {
                str += '      ' + this.programs[i].listOfMovies[j].getData() + '\n';
            }
        }
        return str
    }


    var fest = new Festival('Fest');
    var kan = new Festival('Kan');
    fest.addProgram(firstProgram);
    fest.addProgram(secondProgram);
    kan.addProgram(thirdProgram);
    console.log(fest.getData())


})();