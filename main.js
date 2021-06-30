import { fillInput, clearInput } from "./scripts.js";

const head = document.querySelector('head');
const body = document.querySelector('body');

const styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', './styles.css');
const meta = document.querySelector('meta[charset="UTF-8"]');
meta.parentNode.insertBefore(styles, meta)

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const loadScripts = (url) => {
    let script = document.createElement('script');
    script.setAttribute('type', 'module');
    script.setAttribute('src', url);
    body.appendChild(script);
}

loadScripts('./scripts.js')

const h1 = document.createElement('h1');
h1.textContent = `Basic Calculator`
container.appendChild(h1);

const main = document.createElement('div');
main.classList.add('main');
container.appendChild(main);

const input = document.createElement('input');
// input.setAttribute('value', '0')
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

addButton(`C`, clearInput);
addButton(`+/-`);
addButton(`%`);
addButton(`/`);
addButton(`7`, fillInput);
addButton(`8`, fillInput);
addButton(`9`, fillInput);
addButton(`*`);
addButton(`4`, fillInput);
addButton(`5`, fillInput);
addButton(`6`, fillInput);
addButton(`+`);
addButton(`1`, fillInput);
addButton(`2`, fillInput);
addButton(`3`, fillInput);
addButton(`-`);
addButton(`0`, fillInput);
addButton(`.`);
addButton(`=`);
addButton(`!`);