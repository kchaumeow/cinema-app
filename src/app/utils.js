export async function getFilms() {
    const films = await fetch('http://localhost:3001/api/movies')
    return films.json()
}

export async function getCinemas() {
    const cinemas = await fetch('http://localhost:3001/api/cinemas')
    return cinemas.json()
}

export async function getReviews(filmId) {
    const reviews = await fetch(
        `http://localhost:3001/api/reviews?movieId=${filmId}`
    )
    return reviews.json()
}
export async function getFilm(filmId) {
    const film = await fetch(
        `http://localhost:3001/api/movie?movieId=${filmId}`
    )
    return film.json()
}

export async function getFilmsInCinema(cinemaId) {
    const films = await fetch(
        `http://localhost:3001/api/movies?cinemaId=${cinemaId}`
    )
    return films.json()
}
