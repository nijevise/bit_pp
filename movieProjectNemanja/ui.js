var $movieLength = document.querySelector('#length');
var $movieTitle = document.querySelector('#title');
var $movieGenre = document.querySelector('#genre');
var $movieList = document.querySelector('#movie-list');


function getMovieData() {
    return {
        title: $movieTitle.value,
        length: $movieLength.value,
        genre: $movieGenre.value
    }
}

function resetForm() {
    $movieLength.value = '';
    $movieTitle.value = '';
    $movieGenre.value = 'drama';
}

function renderMovie(arr) {
    for (var i = 0; i < arr.length; i++) {
        var movie = document.createElement('p');
        movie.textContent = arr[i].getData();
        $movieList.appendChild(movie);
    }
}