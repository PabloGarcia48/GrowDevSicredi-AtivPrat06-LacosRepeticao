/*
4. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

const dayNumber = Number(prompt("Digite um número correspondente ao dia da semana"))
let weekDay = ""

switch (dayNumber) {
    case 1:
        weekDay = "Domingo"
        break;
    case 2:
        weekDay = "Segunda-Feira"
        break;
    case 3:
        weekDay = "Terça-Feira"
        break;
    case 4:
        weekDay = "Quarta-Feira"
        break;
    case 5:
        weekDay = "Quinta-Feira"
        break;
    case 6:
        weekDay = "Sexta-Feira"
        break;
    case 7:
        weekDay = "Sábado"
        break;
    default:
        weekDay = "Dia não reconhecido --- ERRO!"
        break;
}

document.write(`Você digitou ${dayNumber},<br>O dia da semana correspondente é: ${weekDay}`)