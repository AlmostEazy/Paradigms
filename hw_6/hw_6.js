// Ваша задача
// Написать программу на любом языке в любой парадигме для
// бинарного поиска. На вход подаётся целочисленный массив и
// число. На выходе - индекс элемента или -1, в случае если искомого
// элемента нет в массиве.

function binarySearch (array, element) {
    let leftBorder = -1;
    let rightBorder = array.length;

    while (rightBorder - leftBorder > 1) {
        let middle = Math.floor((leftBorder + rightBorder) / 2);
        
        if (array[middle] === element) {
            return middle;
        }

        if (array[middle] > element) {
            rightBorder = middle;
        } else {
            leftBorder = middle;
        }
    }
    return "-1 (искомый элемент отсутствует)";
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Индекс искомого элемента: ${binarySearch(arr, 3)}`);
console.log(`Индекс искомого элемента: ${binarySearch(arr, 6)}`);
console.log(`Индекс искомого элемента: ${binarySearch(arr, 9)}`);
console.log(`Индекс искомого элемента: ${binarySearch(arr, 11)}`);