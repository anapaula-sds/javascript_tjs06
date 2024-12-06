const leia = require('readline-sync')
let vetorNumero = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

const posicao = vetorNumero.indexOf(numero);

if (posicao !== -1) {
  console.log(`O número ${numero} está localizado na posicao: ${posicao}.`);
} else {
  console.log(`O numero ${numero} não foi encontrado!`);
}