const leia = require('readline-sync');

console.log('***Cardapio***')
console.log('1 - Cachorro Quente')
console.log('2 - X-Salada')
console.log('3 - X-Bacon')
console.log('4 - Bauru')
console.log('5 - Refrigerante')
console.log('6 - Suco de Laranja\n')

let codigo = leia.questionInt("Codigo do produto: ");
let quantidade = leia.questionInt("Quantidade: ");
let valor;
let produto;

switch(codigo){
    case 1:
        valor = 10.00;
        produto = "Cachorro Quente";
        break;
    case 2:
        valor = 15.00;
        produto = "X-Salada";
        break;
    case 3:
        valor = 18.00;
        produto = "X-Bacon";
        break;
    case 4:
        valor = 12.00;
        produto = "Bauru";
        break;
    case 5:
        valor = 8.00;
        produto = "Refrigerante";
        break;
    case 6:
        valor = 13.00;
        produto = "Suco de Laranja";
        break;
    default:
        console.log("\nCodigo Invalido!");
        break;
}
    let total = quantidade * valor;
    console.log(`\nProduto: ${produto}`);
    console.log(`Valor total: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`);

