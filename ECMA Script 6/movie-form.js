const button = document.querySelector('button');
button.addEventListener('click', createMovieOnClick);
const $movieName = document.querySelector('.name');
const $movieLength = document.querySelector('.length');
const $movieGenre = document.querySelector('.genre');
const paragrafOnly = document.querySelector('div');
let movies = [];


function Genre(genre) {
    this.genre = genre;
    this.getGenreData = function () {
        return `${this.genre[0].toUpperCase()}${this.genre[genre.length - 1].toUpperCase()}`;
    }
}


function Movie(name, length, genre) {
    this.name = name;
    this.length = length;
    this.genre = genre;
    this.getData = function () {
        return `${this.name.toUpperCase()} ${this.length} ${this.genre.getGenreData()}`;
    }
}


function getMovieData() {

    const title = $movieName.value;
    const length = $movieLength.value;
    const genre = $movieGenre.value;
    return {
        title,
        length,
        genre
    }
}

function createMovieOnClick(event) {
    event.preventDefault();
    const movie = getMovieData();
    const newMovie = new Movie(movie.title, movie.length, new Genre(movie.genre))
    movies.push(newMovie);


    paragrafOnly.textContent = '';

    for (let i = 0; i < movies.length; i++) {
        const par = document.createElement('p');
        par.textContent = movies[i].getData();
        paragrafOnly.appendChild(par);

    }
}