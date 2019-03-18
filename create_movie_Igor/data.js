var movieList = [];
var programList=[];

function Movie(movtitle, movlength, movgenre) {
    this.title = movtitle;
    this.length = movlength;
    this.genre = movgenre;

    this.getData = function () {
        return this.title + "," + parseInt(this.length) + "," + this.genre;
    }
}
function createMovie(movtitle, movlength, movgenre) {
    var newmovie = new Movie(movtitle, movlength, movgenre);
    return newmovie;
}
function Program(date){
    this.date=new Date(date);
    this.movieList=[];
    
    this.totalNumbersOfMovie=function(){

    return this.movieList.length;
    };

    this.addmovie=function(movietitle){
        this.movieList.push(movietitle);
    };
    this.getData=function(){
        var lengthofProgram=0;
        
        this.movieList.forEach(function(curentMovie) {
        lengthofProgram+=parseInt(curentMovie.length) ;

        });
        return this.date.getDate()+ "."+ this.date.getMonth()+"."+ this.date.getFullYear()+" program duration is "+ parseInt(lengthofProgram) +"  min.";


    }
}

function createProgram(date){
    var newProgram=new Program(date);

    return newProgram;
}
