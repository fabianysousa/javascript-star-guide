//No exemplo o split() retirou a letra “o” e separa preenchendo um array.
let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split("o");
console.log(myArray);

//No exemplo o join() adiciona um “_” após cada palavra. 
let phrase1 = "Eu quero viver o Amor!";
let myArray2 = phrase1.split("o");
let phraseWithUnderscore = myArray2.join("_");
console.log(phraseWithUnderscore);