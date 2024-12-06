const readline = require('readline-sync');

const num1 = readline.questionInt("Digite o primeiro numero: ");
const num2 = readline.questionInt("Digite o segundo numero: ");

if (num1 >= num2) {
    console.log("Intervalo invalido!");
    process.exit();
}

console.log(`\nNo Intervalo entre ${num1} a ${num2}: `);
for (let contador = num1; contador <= num2; contador++) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} é multiplo de 3 e 5`);
    }
}
