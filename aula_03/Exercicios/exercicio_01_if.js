const leia = require('readline-sync');
let numA = leia.questionInt("Digite o numero A: ")
let numB = leia.questionInt("Digite o numero B: ")
let numC = leia.questionInt("Digite o numero C: ")
let soma = numA + numB

if(soma > numC){
    console.log(`\n${numA} + ${numB} = ${soma} > ${numC} \n\nA soma de A + B é Maior do que C`);
}else if (soma < numC){
    console.log(`\n${numA} + ${numB} = ${soma} < ${numC} \n\nA soma de A + B é Menor do que C`);
}else{
    console.log(`\n${numA} + ${numB} = ${soma} = ${numC} \n\nA soma de A + B é Igual a C`);
}