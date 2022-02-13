const add = function (a = 0, b = a) {
    return (Math.round((Number(a) + Number(b)) * 100) / 100);
};

const subtract = function (a = 0, b = a) {
    return (Math.round((Number(a) - Number(b)) * 100) / 100)
};

const multiply = function (a = 1, b = a) {
    return (Math.round((Number(a) * Number(b)) * 100) / 100)
};

const divide = function (a = 1, b = a) {
    return (Math.round((Number(a) / Number(b)) * 100) / 100);
};

const factorial = function (num) {
    let factor = 1;
    for (let i = 1; i <= Number(num); i++) {
        factor *= i;
    }
    return factor;
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

export function operate() {
    const input = document.querySelector('input');
    const arr = input.value.split(/(\d*\.\d*)|(\d*)/).filter(num => !!num);

    switch (true) {
        case input.value.includes('!'):
            input.value = factorial(arr[arr.indexOf('!') - 1])
            break;
        case input.value.includes('+'):
            input.value = add(arr[arr.indexOf('+') - 1], arr[arr.indexOf('+') + 1]);
            break;
        case input.value.includes('-'):
            input.value = subtract(arr[arr.indexOf('-') - 1], arr[arr.indexOf('-') + 1]);
            break;
        case input.value.includes('×'):
            input.value = multiply(arr[arr.indexOf('×') - 1], arr[arr.indexOf('×') + 1]);
            break;
        case input.value.includes('÷'):
            input.value = divide(arr[arr.indexOf('÷') - 1], arr[arr.indexOf('÷') + 1]);
            break;
        default:
            break;
    }
    cleared = false;
}