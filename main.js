import { fillInput, clearInput, operate } from "./scripts.js";

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const script = document.createElement('script');
script.type = 'module';
script.src = './scripts.js';
document.body.appendChild(script);

const h1 = document.createElement('h1');
h1.textContent = 'Basic Calculator'
container.appendChild(h1);

const main = document.createElement('div');
main.classList.add('main');
container.appendChild(main);

const input = document.createElement('input');
input.setAttribute('value', '0');
main.appendChild(input);

const buttons = document.createElement('div');
buttons.classList.add('btns');
main.appendChild(buttons);

const addButton = (value, click) => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.onclick = click;
    button.textContent = value;
    buttons.appendChild(button)
};

const allButtons = [
    ['C', clearInput], ['+/-'], ['%'], ['÷', fillInput],
    ['7', fillInput], ['8', fillInput], ['9', fillInput], ['×', fillInput],
    ['4', fillInput], ['5', fillInput], ['6', fillInput], ['+', fillInput],
    ['1', fillInput], ['2', fillInput], ['3', fillInput], ['-', fillInput],
    ['0', fillInput], ['.', fillInput], ['=', operate], ['!', fillInput]
];

allButtons.forEach(item => addButton(item[0], item[1]));