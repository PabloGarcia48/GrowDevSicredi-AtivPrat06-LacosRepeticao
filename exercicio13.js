/*
13. Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado.
*/

const num = Number(prompt("Digite um número para listar os ímpares até ele."))

document.write(`Número digitado: ${num}<br>`)
document.write(`Números ímpares entre 1 e ${num}.<br>`)

for (let i = 1; i <= num; i++) {
    if (i %2 != 0) {
     document.write(`${i}; `)   
    }
}