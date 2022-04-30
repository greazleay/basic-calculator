'use-strict';

class Calculator {
    static add(a = 0, b = a) {
        return (Math.round((+a + +b) * 100) / 100);
    };

    static subtract(a = 0, b = a) {
        return (Math.round((+a - +b) * 100) / 100);
    };

    static multiply(a = 1, b = a) {
        return (Math.round((+a * +b) * 100) / 100);
    };

    static divide(a = 1, b = a) {
        return (Math.round((+a / +b) * 100) / 100);
    };

    static power(a = 1, b = a) {
        return (Math.round(Math.pow(+a, +b) * 100) / 100);
    };

    static factorial(n) { 
        return n <= 1 ? 1 : n * this.factorial(n - 1) 
    };
};

let cleared = true;

function toClear() {
    const input = document.querySelector('input');
    input.value = "";
    cleared = true;
}

export function fillInput(e) {
    if (!cleared) toClear();
    const input = document.querySelector('input');
    if (input.value === '0') input.value = '';
    input.value = input.value.concat('', e.target.textContent);
}

export function clearInput(e) {
    const input = document.querySelector('input');
    input.value = "0"
}

export function compute() {
    const input = document.querySelector('input');
    const arr = input.value.split(/(\d*\.\d*)|(\d*)/).filter(Boolean);

    switch (true) {
        case input.value.includes('!'):
            input.value = Calculator.factorial(arr[arr.indexOf('!') - 1])
            break;
        case input.value.includes('+'):
            input.value = Calculator.add(arr[arr.indexOf('+') - 1], arr[arr.indexOf('+') + 1]);
            break;
        case input.value.includes('-'):
            input.value = Calculator.subtract(arr[arr.indexOf('-') - 1], arr[arr.indexOf('-') + 1]);
            break;
        case input.value.includes('×'):
            input.value = Calculator.multiply(arr[arr.indexOf('×') - 1], arr[arr.indexOf('×') + 1]);
            break;
        case input.value.includes('÷'):
            input.value = Calculator.divide(arr[arr.indexOf('÷') - 1], arr[arr.indexOf('÷') + 1]);
            break;
        default:
            break;
    }
    cleared = false;
};