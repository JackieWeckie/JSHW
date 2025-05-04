function changeColor() {
        const colorBlock = document.getElementById('colorBlock');
        const colorPicker = document.getElementById('colorPicker');
        colorBlock.style.backgroundColor = colorPicker.value;
}

function validatePassword() {
        const password = document.getElementById('password').value;
        const message = document.getElementById('passwordMessage');

        const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

        if (isValid) {
                alert('Пароль корректный!');
                message.style.color = "green";
        } else {
                alert('Пароль некорректный!');
                message.style.color = "red";
        }
}