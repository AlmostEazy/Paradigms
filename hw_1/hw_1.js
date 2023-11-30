// Задача №1
// Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
// сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

// Создадим рандомный массив целых чисел

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

let arrOne = Array.from({length:10}, () => getRandomNumber(-10, 10));

console.log (`Рандомный массив для императивного стиля: [${arrOne}]`);

// Императивный стиль (описываем каждый шаг)

for (let j = 0; j < arrOne.length; j += 1) {
    for (let i = 0; i < arrOne.length - 1 - j; i += 1) {
        if (arrOne[i] < arrOne[i + 1]) {
            let temp = arrOne[i];
            arrOne[i] = arrOne[i + 1];
            arrOne[i + 1] = temp;
        };
    };
};

console.log(`Сортированный массив в порядке убывания императивным стилем: [${arrOne}]`);

// Задача №2
// Написать точно такую же процедуру, но в декларативном стиле

let arrTwo = Array.from({length:10}, () => getRandomNumber(-10, 10));

console.log (`Рандомный массив для декларативного стиля: [${arrTwo}]`);

// Декларативный стиль (просто говорим программе, что нам нужен, сортированный по убыванию, массив)

arrTwo.sort((a, b) => b - a);

console.log(`Сортированный массив в порядке убывания декларативным стилем: [${arrTwo}]`);

// Либо предположить, что у нас уже есть функция сортировки и просто использовать ее в декларативном стиле в строке вывода в консоль.

// function bubbleSort (array) {
//     for (let j = 0; j < array.length; j += 1) {
//         for (let i = 0; i < array.length - 1 - j; i += 1) {
//             if (array[i] < array[i + 1]) {
//                 let temp = array[i];
//                 array[i] = array[i + 1];
//                 array[i + 1] = temp;
//             };
//         };
//     };
//     return array;
// };

// console.log(`Сортированный массив в порядке убывания декларативным стилем: [${bubbleSort(arrTwo)}]`);







