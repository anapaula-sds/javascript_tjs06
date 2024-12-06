const leia = require("readline-sync");

let soma = 0;
let contador = 0;
let numero;

do {
    numero = leia.questionInt("Digite um numero: ");
  
  if (numero !== 0 && numero % 3 === 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

let media;

if (contador > 0) {
  media = soma / contador;  
} else {
  media = 0;  
}

console.log(`A media dos numeros multiplos de 3 e: ${media.toFixed(2)}`);
