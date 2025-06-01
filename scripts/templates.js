document.addEventListener('DOMContentLoaded', () => {
    fetch('templates/footer.html')
    .then(response => response.text())
    .then(data => {
        const div = document.createElement('div');
        div.innerHTML = data;
        document.body.appendChild(div);
    });

    fetch('templates/menu.html')
    .then(response => response.text())
    .then(data => {
        const div = document.createElement('div');
        div.innerHTML = data;
        document.body.appendChild(div);
    });
});
