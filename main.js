const head = document.querySelector('head');
const body = document.querySelector('body');

const styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', '/styles.css');
head.appendChild(styles);

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const loadScripts = (url) => {
    let script = document.createElement('script');
    script.setAttribute('src', url);
    body.appendChild(script);
}

loadScripts('/scripts.js')

const h1 = document.createElement('h1');
h1.textContent = `Basic Calculator`
container.appendChild(h1);

const main = document.createElement('div');
main.classList.add('main');
container.appendChild(main);

const input = document.createElement('input');
input.setAttribute('value', '0')
main.appendChild(input);

const buttons = document.createElement('div');
buttons.classList.add('btns');
main.appendChild(buttons);

const addButton = (value, click) => {
    let button = document.createElement('button');
    button.classList.add('btn');
    button.onclick = click;
    button.textContent = value;
    buttons.appendChild(button)
};

addButton(`C`);
addButton(`+/-`);
addButton(`%`);
addButton(`/`);
addButton(`7`);
addButton(`8`);
addButton(`9`);
addButton(`*`);
addButton(`4`);
addButton(`5`);
addButton(`6`);
addButton(`+`);
addButton(`1`);
addButton(`2`);
addButton(`3`);
addButton(`-`);
addButton(`0`);
addButton(`.`);
addButton(`=`);
addButton(`!`);