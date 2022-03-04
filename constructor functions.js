// Funções construtoras são funções que:

// - instancia um objeto
// - utiliza this para refrenciar propriedades

function Person(name) {
	this.name = name;
	this.walk = function() {
		return this.name + " está andando"
	}
}

const person1 = new Person("Faby");
const person2 = new Person("Ernandes");

console.log(person1.walk());
console.log(person2.walk());