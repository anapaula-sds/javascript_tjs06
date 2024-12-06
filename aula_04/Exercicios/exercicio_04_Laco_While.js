const leia = require("readline-sync");

let backend = 0;
let mulheresFrontend = 0;
let homensMobile40Mais = 0;
let naoBinariosFullStack30Menos = 0;
let totalPessoas = 0;
let somaIdades = 0;

let continua = "S";

while (continua === "S") {
  let idade = leia.questionInt("Idade: ");

  let genero;
  do {
    genero = leia.questionInt("Identidade de gênero: \n1 - Mulher Cis\n2 - Homem Cis\n3 - Não Binário\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\nEscolha: ");
    if (genero < 1 || genero > 6)
      console.log("Por favor, escolha um numero entre 1 e 6.");
  } while (genero < 1 || genero > 6);

  let desenvolvedor;
  do {
    desenvolvedor = leia.questionInt("Pessoa desenvolvedora: \n1 - Backend\n2 - Frontend\n3 - Mobile\n4 -FullStack\nEscolha: ");

    if (desenvolvedor < 1 || desenvolvedor > 4)
      console.log("Por favor, escolha um numero entre 1 e 4.");
  } while (desenvolvedor < 1 || desenvolvedor > 4);

  totalPessoas++;
  somaIdades += idade;

  if (desenvolvedor === 1) backend++;
  if ( desenvolvedor === 2 && (genero === 1 || genero === 4))
    mulheresFrontend++;
  if (desenvolvedor === 3 && (genero === 2 || genero === 5) && idade > 40)
    homensMobile40Mais++;
  if (desenvolvedor === 4 && genero === 3 && idade < 30)
    naoBinariosFullStack30Menos++;

  continua = leia.question("Deseja continuar? (S/N): ").toUpperCase();
}

console.log(`Total de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensMobile40Mais}`);
console.log(`Total de Não Binarias desenvolvedoras FullStack menores de 30 anos: ${naoBinariosFullStack30Menos}`);
console.log(`O numero total de pessoas que responderam a pesquisa: ${totalPessoas}`);
console.log(`A media de idade das pessoas que responderam a pesquisa: ${totalPessoas > 0 ? (somaIdades / totalPessoas).toFixed(2) : 0}`);
