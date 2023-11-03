/*
16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
const anoAtual = 2023

const idade = anoAtual - anoNascimento

if (idade >= 18 && idade <= 70) {
    document.write("Você deve votar!")
} else if (idade >= 16 ) {
    document.write("Você pode votar, se quiser!")    
} else {
    document.write("Você não pode votar!")
}

document.write(`<br>Sua idade é: ${idade} anos`)