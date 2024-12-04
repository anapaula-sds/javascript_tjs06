const leia = require('readline-sync');

console.log('***Codigo da operacao matematica***');
console.log('1 - SOMA +');
console.log('2 - SUBTRAÇÃO -');
console.log('3 - MULTIPLICAÇÃO *');
console.log('4 - DIVISÃO /');

let num1 = leia.questionFloat("Digite o primeiro numero: ");
let num2 = leia.questionFloat("Digite o segundo numero: ");
let operador = leia.questionInt("Operacao: ");
let resultado;

switch (operador) {
    case 1:
        resultado = num1 + num2;
        console.log(`${num1.toFixed(1)} + ${num2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 2:
        resultado = num1 - num2;
        console.log(`${num1.toFixed(1)} - ${num2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 3:
        resultado = num1 * num2;
        console.log(`${num1.toFixed(1)} * ${num2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    case 4:
        resultado = num1 / num2;
        console.log(`${num1.toFixed(1)} / ${num2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;
    default:
        console.log("\nOperacao invalida!");
        break;
}
