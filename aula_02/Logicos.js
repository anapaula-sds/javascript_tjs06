const leia = require('readline-sync')

//dados usuário
const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = true

console.log("Tela de Login")

let usuarioLogin = leia.question('Digite o seu usuario: ')

let senhaLogin = leia.question('Digite a sua senha: ', {hideEchoBack: true})

if (usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja Bem vindo! Usuario autenticado com sucesso!"
} else{
    var mensagem = "Acesso negado!"
}
console.log(mensagem)

if(isBlock){
    console.log("Usuario ativo!")
}else{
    console.log("Usuario esta inativo! contate o administrador")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("Acesso ao Painel Administrativo Liberado.")
}else{
    console.log("Acesso ao Painel Administrativo Negado")
}