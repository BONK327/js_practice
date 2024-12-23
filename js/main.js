let age = +prompt('А лет то тебе сколько?')

// if (age < 18) {
//     console.log("Подрасти немного");
// } else if (age >= 18 && age < 20) {
//     console.log('Входить можно, но с пропуском');
// } else {
//     console.log('Проходите, сэр!');
// }
//
// const open = age < 18 ? 'Подрасти немного' : age >= 18 && age < 20 ? 'Входить можно, но только с пропуском' : 'Проходите, сэр!'
// console.log(open)

switch (age) {
    case 18:
        console.log('Подрасти немного');
        break;
    case 19:
        console.log("Проходи");
        break;
    default:
        console.log('Ладно');

}