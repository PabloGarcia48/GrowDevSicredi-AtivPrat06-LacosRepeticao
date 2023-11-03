/*
14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor
*/

const num1 = Number(prompt("Digite um número para ser multiplicado por 3"))
let num2 = num1

while (num2 < 500) {
    num2 = num2 * 3
    if (num2 < 500) {
        var num3 = num2
    }
}

document.write(`${num3} é o último número antes de 500, na multiplicação por ${num1}.<br>`)