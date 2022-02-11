//Cria um novo array a partir do filtro 


array.filter(callback, thisArg/*Opcional*/ )

/*Filter
Filtre e retorne todos os números pares de um array.*/

function filterEvens(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filterEvens([5, 2, 7, 1, 9, 8, 6]));
