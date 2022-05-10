//Verificar se o texto contém a palavra Amor
let phrase = 'Eu quero viver!';
console.log(phrase.includes('Amor'));
//false - pois a palavra não existe na frase

let phrase2 = 'Eu quero viver o amor!';
console.log(phrase2.includes('Amor'));
//false - pois apesar de a palavra amor existir ele não reconhece por ser case sentitive

let phrase3 = 'Eu quero viver o amor!';
console.log(phrase3.includes('amor'));