const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');

const operation = prompt('What operation would you do?');

//Решил сразу определить параметрам значение по умолчанию,чтобы не писать в вызове функции
function doSum(a = firstNumber, b = secondNumber) {
	const result = a + b;
	return console.log(`${a} + ${b} = ${result}`);
}
function doMinus(a = firstNumber, b = secondNumber) {
	const result = a - b;
	return console.log(`${a} - ${b} = ${result}`);
}
function doMultiply(a = firstNumber, b = secondNumber) {
	const result = a * b;
	console.log(`${a} * ${b} = ${result}`);
}
function doDevide(a = firstNumber, b = secondNumber) {
	const result = a / b;
	console.log(`${a} / ${b} = ${result}`);
}

if (operation === '+') {
	doSum();
} else if (operation === '-') {
	doMinus();
} else if (operation === '*') {
	doMultiply();
} else if (operation === '/') {
	doDevide();
} else {
	console.log(`You entered incorrect operation`);
}

