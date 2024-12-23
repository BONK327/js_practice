let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
console.log(numberOfFilms);

if (numberOfFilms == null) {
    console.log('Вы не ответели на вопрос ;(');
} else {
    let n = numberOfFilms * 4;
    console.log(n);
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
}

let a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько вы бы оценили его?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько вы бы оценили его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)