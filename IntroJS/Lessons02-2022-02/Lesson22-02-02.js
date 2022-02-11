//Crie uma função que recebe dois números como parâmetros.
//Confira se os números são iguais.
//Confira se a soma dos números é maior que 10 ou menor que 20.
//Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
function compareNums(num1, num2) {
	const firstPhrase = createFirstPhrase(num1, num2);
	const secondPhrase = createSecondPhrase(num1, num2);

	return `${firstPhrase} ${secondPhrase}`;
}

function createFirstPhrase(num1, num2) {
	let firstPhase = `Yours numbers are ${num1} and ${num2}`;
	let yahNo = 'that not';

	if (num1 === num2) {
		yahNo = '';
	}

	return `${firstPhase} ${yahNo} are even.`;
}

function createSecondPhrase(num1, num2) {
	const sum = num1 + num2;
	let compareTen = 'smaller';
	let compareTwenty = 'smaller';

	if (sum > 10) {
		compareTen = 'bigger';
	}

	if (sum > 20) {
		compareTwenty = 'bigger';
	}

	return `Your sum is ${sum}, which is ${compareTen} than 10 and ${compareTwenty} than 20.`;
}

console.log(compareNums(2, 5));