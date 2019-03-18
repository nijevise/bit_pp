var $createmoviebutton = document.querySelector(".createbutton");
var $movieTitle = document.querySelector(".movietitle");
var $movieLength = document.querySelector(".movielength");
var $movieGenre = document.querySelector(".genre");
var $movieList = document.querySelector(".movieList");
var $movieForm = document.querySelector('.newform');
var $newprogram=document.querySelector(".dateprogram");
var $newProgrambutton=document.querySelector(".createprogram");
var $programList=document.querySelector(".programList");
var $secondForm=document.querySelector(".secondform");
var $choseProgram=document.querySelector(".choseprogram");
var $choseMovie=document.querySelector(".chosemovie");
var $addMovieButton = document.querySelector(".addmovietoprogram");





function renderMovie() {
    $movieList.textContent = '';
    movieList.forEach(function (currentMovie) {
        var $listItem = document.createElement("p");
        var listItemcontent = currentMovie.getData();
        $listItem.textContent = listItemcontent;
        $movieList.appendChild($listItem);
    });
}
function renderProgram() {
    $programList.textContent = '';
    programList.forEach(function (currentProgram) {
        var $listItem = document.createElement("p");
        var listItemcontent = currentProgram.getData();
        $listItem.textContent = listItemcontent;
        $programList.appendChild($listItem);
    });

}
function makeSelectOptionProgram(id,createProg){
   
   var newoption=document.createElement("option");
   newoption.setAttribute('value', id);
   newoption.textContent=createProg.getData();

    $choseProgram.appendChild(newoption);

}
function makeSelectOptionMovie(id,createMovie){
   
    var newoption=document.createElement("option");
    newoption.setAttribute('value',id);
    newoption.textContent=createMovie.getData();
 
    $choseMovie.appendChild(newoption);
 
 }
 