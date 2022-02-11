/*function como variavel
const sum = function(a, b) {
    a + b;
}

sum(1,2);
sum(2,3);
*/

//função passada como argumento para outra função = CALLBACK

/*Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.*/
const students = [
    {   
        name: Gus,
        grade: 9,
        class: '3A'
    },
    { 
        name: John,
        grade: 7,
        class: '2C'
    },
    {
        name: Rick,
        grade: 5,
        class: '1D'
    },


]
function aproveStudents (students, average) {
    let aproves = [];
    for (let i = 0; i < students.length; i++){
        let { grade, name} = students[i];
        if(grade >= average) {
            aproves.push(name);
        }
    }
    return aproves;
}
console.log(aproveStudents(students, 5));
/*Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
*/
function calculateAge(years) {
	return `After ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}
const person1 = {
	nome: 'Gilliam',
	idade: 98,
};

const person2 = {
	nome: 'Helena',
	idade: 45,
};

const person3 = {
	nome: 'Jonas',
	idade: 22,
};

console.log(calculateAge.call(person3, 40));
console.log(calculateAge.apply(person2, [24]));
