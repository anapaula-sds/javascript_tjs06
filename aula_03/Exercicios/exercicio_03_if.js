const leia = require('readline-sync');

let nome = leia.question("Digite o seu nome: ");
let idade = leia.questionInt("Digite a idade: ");

let jaFezDoacao = leia.keyInYNStrict("Você já fez outras doacoes de sangue? ");

jaFezDoacao = jaFezDoacao; 

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && idade <= 69 && !jaFezDoacao) {
        console.log(`${nome} não esta apto para doar sangue!`);
    } else {
        console.log(`${nome} está apto para doar sangue!`);
    }
} else {
    console.log(`${nome} não está apto para doar sangue!`);
}
