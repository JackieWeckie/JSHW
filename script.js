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