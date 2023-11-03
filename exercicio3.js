/*
3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante. Caso o número recebido não esteja neste intervalo imprimir “Dia não reconhecido”.
*/

const dayNumber = Number(prompt("Digite um número correspondente ao dia da semana"))
let weekDay = ""

if (dayNumber === 1) {
    weekDay = "Domingo"
} else if (dayNumber === 2) {
    weekDay = "Segunda-feira"
} else if (dayNumber === 3) {
    weekDay = "Terça-feira"
} else if (dayNumber === 4) {
    weekDay = "Quarta-feira"
} else if (dayNumber === 5) {
    weekDay = "Quinta-feira"
} else if (dayNumber === 6) {
    weekDay = "Sexta-feira"
} else if (dayNumber === 7) {
    weekDay = "Sábado"
} else {
    weekDay = "Dia não reconhecido --- ERRO!"
}

document.write(`Você digitou ${dayNumber},<br>O dia da semana correspondente é: ${weekDay}`)
