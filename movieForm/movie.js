var $createMovie = document.querySelector('button');
var $movieTitle = document.querySelector('#title');
var $movieLength = document.querySelector('#length');
var $movieGenre = document.querySelector('.movie-form select');

$createMovie.addEventListener('click', onCreateMovie);

function getMovieData() {
    return {
        title: $movieTitle.value,
        length: $movieLength.value,
        genre: $movieGenre.value
    }
}

function onCreateMovie(event) {
    event.preventDefault();
    console.log('radi');
}




