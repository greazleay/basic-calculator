const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
    let factor = 1;
    for (let i = 1; i <= num; i++) {
        factor *= i;
    }
    return factor
};

export function fillInput(e) {
    const input = document.querySelector('input');
    input.value = input.value.concat('', e.target.textContent);
}

export function clearInput(e) {
    const input = document.querySelector('input');
    input.value = ""
}