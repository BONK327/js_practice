let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
    }
}
// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function countOfFilms() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Надо вводить положительными числами ;)')
    }
}
// countOfFilms();



// function rememberMyFilmsFor() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько вы бы оценили его?');
//
//         if (a != null && b != null && a.length < 50 && a != '' && b != '') {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilmsFor();


// function rememberMyFilmsWhile() {
//     let i = 0;
//     while (i < 2) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько вы бы оценили его?');
//
//         if (a != null && b != null && a.length < 50 && a != '' && b != '') {
//             personalMovieDB.movies[a] = b;
//             i++;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememberMyFilmsWhile();


function rememberMyFilmsDoWhile() {
    let i = 0;
    do {
        const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько вы бы оценили его?');

        if (a != null && b != null && a.length < 50 && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            i++;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    } while (i < 2)
}
// rememberMyFilmsDoWhile();