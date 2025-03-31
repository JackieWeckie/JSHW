let result = prompt('Введите число:');

if (result % 2 === 0) {
        console.log(`Число ${result} чётное.`);
} else if (result % 1 === 0) {
        console.log(`Число ${result} нечётное`);
} else {
        console.log('Вы ввели не число! Попробуйте ещё раз.');
}


const inUSD = parseFloat(prompt('Введите сумму в долларах США:'));
const toEUR = 0.9;
const amountEUR = inUSD * toEUR;

console.log(`Сумма в Евро: ${amountEUR}`);
