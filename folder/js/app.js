const darkMode = document.querySelector('#mode-toggle');
const body = document.body;

darkMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    console.log(body);
})

// Verificam daca utiilzatorul are selectate functia dark mode //

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.toggle('dark-mode');
    console.log('dark-mode')
}