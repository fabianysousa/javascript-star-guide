// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number1 = 345.33452345;
console.log(number1.toFixed(1).replace(".",","));

/*
toFixed() limita para duas casas decimais.
Replace() é responsável por substituir um caractere por outro.
*/

// Exemplo 2

// let number2 = 435312345.333452345;
// console.log(Number(number2.toFixed(2).replace(".",",")));

// O NaN aparece pois o “,” não faz parte do number.
// Ele trunca o dado e não trata com precisão.