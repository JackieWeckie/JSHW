const firstNum = parseFloat(prompt('Введите первое число'));
const secondNum = parseFloat(prompt('Введите второе число'));

if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('Вы не ввели число! Попробуйте ещё раз.')
} else {
        let operation = prompt('Выберите действие: сложение (+), вычитание (-), умножение (*) или деление (/)');

        let result;

        switch (operation) {
                case '+': 
                result = firstNum + secondNum;
                break;

                case '-':
                result = firstNum - secondNum;
                break;

                case '*':
                result = firstNum * secondNum;
                break;

                case '/':
                if (secondNum === 0) {
                        alert('Вы не можете делить на 0');
                } else {
                        result = firstNum / secondNum;
                }
                break;

                default: 
                alert('Некорректная операция. Попробуйте ещё раз.');
                break;
        }

        if (result !== undefined) {
                alert('Это будет ' + result);
        }
}