
document.getElementById('addBlockButton').addEventListener('click', () => {
        const colorBlockContainer = document.getElementById('color-block-container');
        const block = document.createElement('div');
        block.className = 'block';

        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        block.style.backgroundColor = randomColor;

        block.addEventListener('click', () => {
                block.remove();
        });

        colorBlockContainer.appendChild(block);
});

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
