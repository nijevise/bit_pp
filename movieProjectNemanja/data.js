function Movie(title, length, genre) {
    this.title = title;
    this.length = length + 'min';
    this.genre = genre;

    this.genreAcr = function () {
        return ('' + genre[0] + genre[genre.length - 1]).toUpperCase();
    }

    this.getData = function () {
        return this.title + ' ' + this.length + ' ' + this.genreAcr();
    }
}