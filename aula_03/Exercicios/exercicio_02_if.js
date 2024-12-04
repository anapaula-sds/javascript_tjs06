let leia = require('readline-sync');
let num = leia.questionInt("Digite um numero: ")

if (num === 0) {
    console.log(`O número é ${num} é par e não é positivo nem negativo`);
} else if (num % 2 === 0 && num > 0 ) {
    console.log(`O número ${num} é par e positivo.`);
} else if (num % 2 !== 0 && num > 0) {
    console.log(`O número ${num} é impar e positivo.`);
} else if (num % 2 === 0 && num < 0) {
    console.log(`O número ${num} é par e negativo.`);
} else if (num % 2 !== 0 && num < 0) {
    console.log(`O número ${num} é impar e negativo.`);
}