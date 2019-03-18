function createMovieHandler(event) {
    
    event.preventDefault();
    var movtitle = $movieTitle.value;
    var movlength = $movieLength.value;
    var movgenre = $movieGenre.value;
    
    var newMovie=createMovie(movtitle, movlength, movgenre);
    var id=movieList.push(newMovie) -1;
    

    makeSelectOptionMovie(id,newMovie);

    renderMovie();
    $movieForm.reset();
}
function createProgramHandler(event) {
    event.preventDefault();
    var date=$newprogram.value;
    var createProg=createProgram(date);
    var id = programList.push(createProg) - 1;


    makeSelectOptionProgram(id,createProg);

    renderProgram();
    $secondForm.reset();
}

function addMovieHandler(event){
event.preventDefault();
    var optionMovie=$choseMovie.value;
    var optionProgram=$choseProgram.value;

    var selcectedProgrem = programList[optionProgram];
    var selcectedMovie = movieList[optionMovie];
    selcectedProgrem.addmovie(selcectedMovie);


    renderProgram();

}



$addMovieButton.addEventListener("click",addMovieHandler);

$newProgrambutton.addEventListener("click",createProgramHandler);

$createmoviebutton.addEventListener("click", createMovieHandler);