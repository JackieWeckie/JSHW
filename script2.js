const colors = ['#DDE1E4', '#85CB33', '#788CA5', '#3BA2E3', '#D4ADCF', '#E4CC37'];
const palette = document.getElementById('palette');
const text = document.getElementById('text');

colors.forEach((color) => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.setAttribute('data-color', color);

        colorBox.addEventListener('click', () => {
                const selectedColor = colorBox.dataset.color;
                text.style.color = selectedColor;
        });

        palette.appendChild(colorBox);
});
