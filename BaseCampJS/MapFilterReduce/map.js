array.map(callback, thisArg/*opcional*/)

callback(item, index, array)
/*Map vs ForEach
Map = Retorna valor definido

ForEach = Retorna valor undefined
*/

/*Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro de um objeto criado por você, e depois sem ele.this*/
//WITH THIS
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());


//WITHOUT THIS

const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 5));

console.log(array);