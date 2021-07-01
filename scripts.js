const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
	return a / b;
};

// const power = function(a, b) {
// 	return Math.pow(a, b)
// };

const factorial = function(num) {
    let factor = 1;
    for (let i = 1; i <= num; i++) {
        factor *= i;
    }
    return factor
};

export function fillInput(e) {
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

    switch (true) {
        case input.value.includes('!'):
            input.value = factorial(parseInt(input.value[input.value.indexOf('!') - 1]))
            break;
        case input.value.includes('+'):
            input.value = add(parseInt(input.value[input.value.indexOf('+') - 1]), parseInt(input.value[input.value.indexOf('+') + 1]))
            break;
        case input.value.includes('-'):
            input.value = subtract(parseInt(input.value[input.value.indexOf('-') - 1]), parseInt(input.value[input.value.indexOf('-') + 1]))
            break;
        case input.value.includes('*'):
            input.value = multiply(parseInt(input.value[input.value.indexOf('*') - 1]), parseInt(input.value[input.value.indexOf('*') + 1]))
            break;
        case input.value.includes('/'):
            input.value = divide(parseInt(input.value[input.value.indexOf('/') - 1]), parseInt(input.value[input.value.indexOf('/') + 1]))
            break;     
        default:
            break;
    }
}