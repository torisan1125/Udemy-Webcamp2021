const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function(e) {
    e.stopPropagation();
    container.style.backgroundColor = makeRandColor();
})

container.addEventListener('click', function() {
    container.classList.add('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}