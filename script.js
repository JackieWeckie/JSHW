document.getElementById('commentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        const date = new Date().toLocaleString();

        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<strong>${name}:</strong> <p>${comment} <i>(${date})</i></p>`;

        document.querySelector('.comments').appendChild(commentDiv);

        document.getElementById('commentForm').reset();
});