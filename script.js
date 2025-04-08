        //1

function exponentTheLessNum() {

        let firstNum = prompt('Введите первое число');
        let secondNum = prompt('Введите второе число');

        if (firstNum < secondNum) {
                alert(`Число ${firstNum} меньше числа ${secondNum}`);
        } else if (firstNum > secondNum) {
                alert(`Число ${secondNum} меньше числа ${firstNum}`);
        } else {
                alert('Числа равны')
        }

        let exponention = prompt(`Введите степень для меньшего числа`);

        //2

        if (firstNum < secondNum) {
                alert(firstNum ** exponention);
        } else if (firstNum > secondNum) {
                alert(secondNum ** exponention);
        } else {
                alert(firstNum ** exponention);
        }
}

        //3

let firstInput = prompt('Введите первое число');
let secondInput = prompt('Введите второе число');
let option = prompt('Выберите действие, ВВОДЯ ЗНАК: сложение (+), вычитание (-), умножение (*), деление (/)');
let result;

// switch (key) {
//         case "+":
//                 alert('Это будет:', firstInput + secondInput);
//                 break;

//         case "-":
//                 alert('Это будет:', firstInput - secondInput);
//                 break;

//         case "*":
//                 alert('Это будет:', firstInput * secondInput);
//                 break;

//         case "/":
//                 if (firstInput > 0 && secondInput > 0) {
//                         alert('Это будет:', firstInput / secondInput);
//                         break;
//                 } else {
//                         alert('Вы не можете делить на 0');
//                         break;
//                 }

//         default:
//                 alert('Неккоректное действие. Попробуйте ещё раз.');
//                 break;
// }

        //4

function isPrime(num) {
        if (num <= 1) {
                return false;
        }

        for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                        return false;
                }
        }
        return true;
}

console.log(isPrime(33));
console.log(isPrime(24)); 
console.log(isPrime(1));

        //5

function getMultiTable(num) {
        console.log(`Таблица умножения для ${num}:`);
        for (let i = 1; i <= 10; i++) {
                console.log(`${num} x ${i} = ${num * i}`);
        }
}

console.log(getMultiTable(4));
console.log(getMultiTable(7));
console.log(getMultiTable(2));