const leia = require('readline-sync')

let n1 = leia.questionFloat("Digite N1: ");
let n2 = leia.questionFloat("Digite N2: ");
let n3 = leia.questionFloat("Digite N3: ");
let n4 = leia.questionFloat("Digite N4: ");

let diferenca = (n1 * n2) - (n3 * n4);

console.log("Diferença: ", diferenca.toFixed(1))