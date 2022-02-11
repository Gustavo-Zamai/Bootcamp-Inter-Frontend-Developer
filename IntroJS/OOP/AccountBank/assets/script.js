/*Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/

class AccountBank {
	constructor(agency, number, type) {
		this.agency = agency;
		this.number = number;
		this.type = type;
		this._cash = 0;
	}

	found(value) {
		if (value > this._cash) {
			return console.log('Insufficient Founds!');
		}

		this._cash = this._cash - value;
		return this._cash;
	}

	deposit(valor) {
		this._cash = this._cash + value;
		return this._cash;
	}

	set cash(value) {
		this._cash = value;
	}

	get cash() {
		return this._cash;
	}
}

class Current extends AccountBank {
	constructor(agency, number, creditCard) {
		super(agency, number);
		this.type = 'Current';
		this._creditCard = creditCard;
	}

	set creditCard(value) {
		this._creditCard = value;
	}

	get creditCard() {
		return this._creditCard;
	}
}

class SaveFounds extends AccountBank {
	constructor(agency, number) {
		super(agency, number);
		this.tipo = 'Saving';
	}
}

class StudentAccount extends AccountBank {
	constructor(agency, number) {
		super(agency, number);
		this.type = 'Student';
	}

	found(value) {
		if (value > 500) {
			return 'Denied Operation.';
		}

		this._cash = this._cash - value;
		return this._cash;
	}
}

const myAccount = new Current (1, 211, true);
const studentAccount = new StudentAccount (2, 333);