const leia = require('readline-sync')

//linhas da matriz
let matrizInteiros = new Array(3);

//colunas da matriz
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

//percorrendo a matriz e preenchendo a matriz
for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite o numero: ")
    }
}
console.table(matrizInteiros);