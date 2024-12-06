const readline = require('readline-sync');

let idade;
let menoresDe21 = 0;
let maioresDe50 = 0;

idade = 0;

while (idade >= 0) { 
    idade = readline.questionInt("Digite uma idade: ");

    if (idade < 0) {
        console.log("Você digitou uma idade negativa, o programa está sendo encerrado!\n");
        continue;
    }

    if (idade < 21) {
        menoresDe21++;
    } else if (idade > 50) {
        maioresDe50++;
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menoresDe21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maioresDe50}`);
