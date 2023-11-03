/*
Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.
*/

const driverAge = Number(prompt(`Qual é a sua idade?`))

if (driverAge >= 18) {
    document.write(`Pode dirigir`)
} else {
    document.write(`Não pode dirigir`)
}
