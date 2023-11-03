/*
17. Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.
*/

const votosTotais = Number(prompt("Digite o número total de eleitores"))
const votosBrancos = Number(prompt("Digite o número total de votos BRANCOS"))
const votosNulos = Number(prompt("Digite o número total de votos NULOS"))
const votosValidos = votosTotais - (votosNulos + votosBrancos)


if (votosValidos >= 0) {
    const votosValPercent = ((votosValidos / votosTotais) * 100).toFixed(2)
    const votosBrPercent = ((votosBrancos / votosTotais) * 100).toFixed(2)
    const votosNlPercent = ((votosNulos / votosTotais) * 100).toFixed(2)

    document.write(`Votos válidos: ${votosValPercent}%  |  ${votosValidos} votos<br>`)
    document.write(`Votos Brancos: ${votosBrPercent}%  |  ${votosBrancos} votos<br>`)
    document.write(`Votos Nulos: ${votosNlPercent}%  |  ${votosNulos} votos<br>`)

} else {
    document.write(`Valores digitados são inválidos inválidos --- ERRO`)
}
