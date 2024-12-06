const leia= require('readline-sync')

let contador = 1
let numero = leia.questionInt("\nDigite um numero");

console.log("\nTABUADA DO ", numero, "\n")

while(contador <= 10){
    console.log(`${numero} X ${contador} = ${numero * contador}`);
    contador++;
}