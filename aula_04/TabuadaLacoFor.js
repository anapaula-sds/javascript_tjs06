const leia= require('readline-sync')

let numero = leia.questionInt("\nDigite um numero");

console.log("\nTABUADA DO ", numero, "\n")

for(let contador = 1; contador <=10; contador++){
    
    console.log(`${numero} X ${contador} = ${numero * contador}`)
}