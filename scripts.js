const add = function(a, b) {
	return (parseInt(a) + parseInt(b));
};

const subtract = function(a, b) {
	return (parseInt(a) - parseInt(b))
};

const multiply = function(a, b) {
    return (parseInt(a) * parseInt(b))
};

const divide = function(a, b) {
	return (parseInt(a) / parseInt(b));
};

const factorial = function(num) {
    let factor = 1;
    for (let i = 1; i <= parseInt(num); i++) {
        factor *= i;
    }
    return factor
};

let cleared = 0;

function toClear() {
    const input = document.querySelector('input');
    input.value = "";
    cleared = 0;
}

export function fillInput(e) {
    if (cleared === 1) toClear();
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
    const arr = input.value.split(/(\d+)/).filter(e => e != '');

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
    cleared = 1;
}