/*
15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

const A = Number(prompt("Digite o primeiro lado do triângulo:"))
const B = Number(prompt("Digite o segundo lado do triângulo:"))
const C = Number(prompt("Digite o terceiro lado do triângulo:"))

document.write(`Primeiro lado = ${A}<br>`)
document.write(`Segundo lado = ${B}<br>`)
document.write(`Terceiro lado = ${C}<br>`)

if (A < (B + C) && B < (A + C) && C < (A + B)) {
    if (A == B && B == C) {
        document.write("Este é um triângulo EQUILÁTERO")
    } else if (A == B || A == C || B == C) {
        document.write("Este é um triângulo ISÓCELES")
    } else {
        document.write("Este é um triângulo ESCALENO")
    } 
} else {
    document.write("Estes valores não formam um triângulo.")
}


// if (A == B && B == C) {
//     document.write("Este é um triângulo EQUILÁTERO")
// } else if (A == B || A == C || B == C) {
//     document.write("Este é um triângulo ISÓCELES")
// } else {
//     document.write("Este é um triângulo ESCALENO")
// }