var $createMovieBtn = document.querySelector('button');

$createMovieBtn.addEventListener('click', onClickMovie);


var movies = []

function onClickMovie(event) {
    event.preventDefault();
    if (!$movieTitle.value || !$movieLength.value) {
        return alert('The field is empty ')
    }
    $movieList.textContent = '';
    var movieData = getMovieData();
    var newMovie = new Movie(movieData.title, movieData.length, movieData.genre);
    movies.push(newMovie);
    resetForm();
    renderMovie(movies);
}






