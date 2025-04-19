//1

document.addEventListener('mouseout', function (e) {
        if (!e.toElement && !e.relatedTarget) {
                alert('Не покидайте страницу так рано!');
        }
});


//2
function calculate(operation) {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        let result;

        switch (operation) {
                case 'add':
                        result = number1 + number2;
                        break;
                case 'subtract':
                        result = number1 - number2;
                        break;
                case 'multiply':
                        result = number1 * number2;
                        break;
                case 'divide':
                        result = number2 !== 0 ? number1 / number2 : 'Ошибка: деление на ноль';
                        break;
                default:
                        result = 'Неверная операция';
        }

        document.getElementById('result').value = result;
}

function clearInputs() {
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('result').value = '';
}