const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionFloat("\nDigite o primeiro numero: ")
n2 = leia.questionFloat("\nDigite o segundo numero: ")
soma = n1 + n2

console.log("A variável N1 possui o valor: ", n1)
console.log("A variável N2 possui o valor: ", n2)
//console.log("A soma das variáveis n1 + n2 é: ", soma)
console.log("\nA Soma das variáveis n1 + n2 é: ", n1 + n2)
console.log("A Subtração das variáveis n1 - n2 é: ", n1 - n2)
console.log("A Multiplicação das variáveis n1 * n2 é: ", n1 * n2)
console.log("A Divisão das variáveis n1 / n2 é: ", n1 / n2)
console.log("A potenciação de  n1 e n2 é: ", Math.pow(n1,n2))
console.log("A raiz quadrada de  n1 e n2 é: ", Math.sqrt(n1))