import { fillInput, clearInput, operate } from "./scripts.js";

const body = document.querySelector('body');

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
input.setAttribute('value', '0');
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

const row1 = [['C', clearInput], ['+/-'], ['%'], ['÷', fillInput]];
row1.forEach(item => addButton(item[0], item[1]));

const row2 = [['7', fillInput], ['8', fillInput], ['9', fillInput], ['×', fillInput]];
row2.forEach(item => addButton(item[0], item[1]));

const row3 = [['4', fillInput], ['5', fillInput], ['6', fillInput], ['+', fillInput]];
row3.forEach(item => addButton(item[0], item[1]));

const row4 = [['1', fillInput], ['2', fillInput], ['3', fillInput], ['-', fillInput]];
row4.forEach(item => addButton(item[0], item[1]));

const row5 = [['0', fillInput], ['.', fillInput], ['=', operate], ['!', fillInput]];
row5.forEach(item => addButton(item[0], item[1]));

// addButton(`C`, clearInput);
// addButton(`+/-`);
// addButton(`%`);
// addButton(`÷`, fillInput);
// addButton(`7`, fillInput);
// addButton(`8`, fillInput);
// addButton(`9`, fillInput);
// addButton(`×`, fillInput);
// addButton(`4`, fillInput);
// addButton(`5`, fillInput);
// addButton(`6`, fillInput);
// addButton(`+`, fillInput);
// addButton(`1`, fillInput);
// addButton(`2`, fillInput);          
// addButton(`3`, fillInput);
// addButton(`-`, fillInput);
// addButton(`0`, fillInput);
// addButton(`.`, fillInput);
// addButton(`=`, operate);
// addButton(`!`, fillInput);

