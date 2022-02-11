//Retorna um valor único


array.reduce(callbackFn, initialValue/*Opcional*/)

/*Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

//1
function calculateFounds(founds, itens) {
	if (!founds || !itens || !itens.length) return 'Send all parameters';

	const finalFounds = itens.reduce((acc, item) => acc - item.price, founds);

	return `Your founds is ${finalFounds} dollar`;
}

list = [
	{
		price: 2,
		name: 'Apple',
	},
	{
		price: 30,
		nome: 'T-Shirt',
	},
	{
		price: 25,
		nome: 'Meal',
	},
];

founds = 98;

console.log(calculateFounds(founds ,list));


//2
function sumNumbers(arr) {
	if (!arr || !arr.length) return;
	const sum = arr.reduce((prev, curr) => prev + curr);

	return sum;
}

console.log(sumNumbers([5, 8, 4, 9]));
