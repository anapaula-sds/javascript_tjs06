const leia = require('readline-sync')

let salarioBruto = leia.questionFloat("Digite o salário Bruto: ");
let adicionalNoturno = leia.questionFloat("Digite quanto de adicional noturno: ");
let horasExtras = leia.questionFloat("Digite quanto de horas extras: ");
let desconto = leia.questionFloat("Digite o desconto");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto

console.log("Salário Liquido: ", salarioLiquido.toFixed(2))
