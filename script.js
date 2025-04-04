//1

let months = ['January', 'February', 'March', 'April', 'May',
        'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

reversed_months = months.reverse;
console.log('Reversed month array: ', reversed_months);

last_deleted_month = months.pop();
console.log('Without the last month: ', last_deleted_month);

console.log('The last array element is ', months.push('December'));

//2

const numbers = [];
for (let i = 0; i < 10; i++) {
        const number = prompt(`Введите случайные 10 чисел ${i + 1}`);
        numbers.push(parseInt(number, 10));
}

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Чётные числа: ', numbers);

//3

const weekDays = [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье'
];

const inputs = [];

for (let i = 0; i < 7; i++) {
        const input = prompt('Введите любой день недели');
        inputs.push(input);
}

if (weekDays.length > 0) {
        console.log('Дни недели, что вы ввели:', inputs);
} else {
        console.log('Вы не ввели ни одного дня недели. Попробуйте ещё раз.');
}