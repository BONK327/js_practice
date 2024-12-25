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

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Надо вводить положительными числами ;)')
}

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько вы бы оценили его?');
//
//     if (a != null && b != null && a.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько вы бы оценили его?');
//
//     if (a != null && b != null && a.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//
// }

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

console.log(personalMovieDB)