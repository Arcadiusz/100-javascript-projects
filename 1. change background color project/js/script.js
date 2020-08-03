const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['blue', 'red', 'green', 'aqua', 'violet', 'yellow', 'beige'];

button.addEventListener('click', () => {
    let currentBackgroundColor = body.style.backgroundColor;
    let pickedColor = colors[(Math.round(Math.random() * (colors.length - 1)))];
    while(currentBackgroundColor == pickedColor) {
        pickedColor = colors[(Math.round(Math.random() * (colors.length - 1)))];
    }
    body.style.backgroundColor = pickedColor;
})