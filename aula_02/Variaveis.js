let nome = "Ana Paula";
let  profissao = "Desenvolvedora FullStack";
let salarioBruto = 3500.44;
const bonus = 0.05

let salario = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',}).format(salarioBruto + (bonus * salarioBruto));

console.log("Nome: ", nome)
console.log("Profissão: ", profissao)

console.log('Salário liquido: ', new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',}).format(salarioBruto + (bonus * salarioBruto)) );

console.log("O salário do colaborador: " + nome + " é " + salarioBruto)

//interpolação de String
console.log(`O salario bruto do colaborador ${nome} é ${salario}`)




//console.log("Tipo da variavel: ", typeof nome)

// nome = 12

// console.log("Nome: ", nome)
// console.log("Tipo da variavel: ", typeof nome)