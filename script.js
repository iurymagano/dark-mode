function changeMode () {
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModelClass);
    h1.classList.toggle(darkModelClass);
    body.classList.toggle(darkModelClass);
    footer.classList.toggle(darkModelClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModelClass)) {
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + " ON";

}
const darkModelClass = 'dark-mode'
const button = document.querySelector('#mode-selector');
const h1 = document.getElementById('titulo');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);