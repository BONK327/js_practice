// const options = {
//     width: 100,
//     height: 100,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     test: function () {
//         console.log('test function')
//     }
// };
// options.test();
//
//
//
// // const {border, bg} = options.color;
// // console.log(border, bg)
//
// console.log(Object.keys(options).length)
//
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }


const obj = {
  closes: true,
  room: 3,
  laptop: 'Huawei',
  run: function (i, j) {
      console.log(`Пробежать можно ${i} километров за ${j} часов`);
  },
    obj2: {
      color: 'blue',
        bg: 'yellow'
    }
};
obj.run(58, 3);

console.log(Object.keys(obj).length);
console.log(obj.obj2);

const {color, bg} = obj.obj2;
console.log(color, bg);