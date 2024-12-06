const leia = require('readline-sync')

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetorInteiros = new Array(5);

;let vetorNumeros= [7, 5, 9, 1, 3, 2, 6, 4, 8, 10]

for(let contador = 0; contador < vetorStrings.length; contador++){
    console.log(vetorStrings[contador]);
}

console.log("O tamanho do vetor de Strings é: ",vetorNumeros.length);

//for(let contador = 0; contador < vetorInteiros.length; contador++){
//    vetorInteiros[contador] = leia.questionInt(`Digite um numero: `)
//}

console.table(vetorInteiros);

console.log()

console.table(vetorStrings.sort());

console.table(vetorNumeros.sort((a,b) => a-b));

//buscar valores 
console.log("Existe numero 2? ", vetorNumeros.indexOf(2));