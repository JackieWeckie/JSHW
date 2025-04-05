//1

const nums = [];


let input = prompt('Введите любое число кроме 0. Число 0 завершит процесс выполнения.');
const num = parseFloat(input);

if (isNaN(num) || num == 0) {
        alert('Вы ввели 0 или не число. Процесс завершён.');
} else {
        nums.push(num);
}

if (nums.length === 0) {
        console.log('Введённых чисел нет');
}

const max = Math.max(...nums);
const min = Math.min(...nums);
const sum = nums.reduce((acc, val) => acc + val, 0);
const average = sum / nums.length;

console.log(`Максимальное значение: ${max}`);
console.log(`Минимальное значение: ${min}`);
console.log(`Сумма: ${sum}`);
console.log(`Среднее арифметическое: ${average}`);


//2


const x = prompt('Введите значение для X');
const array = [];

for (let i = 0; i < 5; i++) {
        const element = prompt(`Введите элемент массива ${i + 1}:`);
        array.push(element);
}

const index = array.indexOf(x);

if (index === -1) {
        console.log('Значение X не найдено в массиве.');
}

const leftElement = index === 0 ? array[array.length - 1] : array[index - 1];
const rightElement = index === array.length - 1 ? array[0] : array[index + 1];

console.log(`Индекс X: ${index}`);
console.log(`Левый соседний элемент: ${leftElement}`);
console.log(`Правый соседний элемент: ${rightElement}`);



//3


const evenNums = [];
const oddNums = [];

for (let i = 0; i < 10; i++) {
        const str = prompt(`Введите строку ${i + 1}`);
}

if (evenNums.length % 2 === 0) {
        evenNums.push(str);
} else {
        oddNums.push(str);
}

console.log('Строки с чётными цифрами: ', evenNums);
console.log('Строки с нечётными цифрами: ', oddNums);