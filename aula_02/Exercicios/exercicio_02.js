const leia = require('readline-sync')

let nota1 = leia.questionFloat("Digite a 1ª Nota: ");
let nota2 = leia.questionFloat("Digite a 2ª Nota: ");
let nota3 = leia.questionFloat("Digite a 3ª Nota: ");
let nota4 = leia.questionFloat("Digite a 4ª Nota: ");
let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Média final: ", media.toFixed(1))