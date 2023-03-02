const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultColor = '#fff';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg() {
    container.style.backgroundColor = `${color.value}`;
}