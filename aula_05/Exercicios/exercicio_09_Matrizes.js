const leia = require('readline-sync')

const matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  console.log("Digite os valores da matriz 3x3:");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = leia.questionInt(`Digite o elemento [${i}][${j}]:`);
    }
  }
  
  let diagonalPrincipal = "";
  let diagonalSecundaria = "";
  let somaPrincipal = 0;
  let somaSecundaria = 0;
  
//calculando os elementos e as somas das diagonais
  for (let i = 0; i < 3; i++) {
    diagonalPrincipal += matriz[i][i] + (i < 2 ? ", " : ""); //elementos da diagonal principal
    somaPrincipal += matriz[i][i];
  
    diagonalSecundaria += matriz[i][2 - i] + (i < 2 ? ", " : ""); //elementos da diagonal secundária
    somaSecundaria += matriz[i][2 - i];
  }
  
  console.log("Matriz 3x3:");
  for (let i = 0; i < 3; i++) {
    let linha = "";
    for (let j = 0; j < 3; j++) {
      linha += matriz[i][j] + (j < 2 ? " " : "");
    }
    console.log(linha);
  }
  
  console.log("Elementos da Diagonal Principal:", diagonalPrincipal);
  console.log("Elementos da Diagonal Secundária:", diagonalSecundaria);
  console.log("Soma dos elementos da Diagonal Principal:", somaPrincipal);
  console.log("Soma dos elementos da Diagonal Secundária:", somaSecundaria);