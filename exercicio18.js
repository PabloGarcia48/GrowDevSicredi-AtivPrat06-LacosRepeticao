/*
18. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:

À vista
Desconto de 2,5% sobre o preço de tabela

De 2 até 5 vezes
Preço de tabela, sem desconto ou acréscimo

De 6 até 10 vezes
Juros de 6% sobre o preço de tabela

De 11 até 15 vezes
Juros de 13% sobre o preço de tabela

Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagamento será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.
*/

const precoTabela = Number(prompt("Digite o valor de tabela do produto"))
const parcelas = Number(prompt("Digite o número de parcelas.\nPara à vista 1"))
let precoPagarTotal = 0
let valorParcelas = 0

if (parcelas == 1) {
    precoPagarTotal = precoTabela * 0,975
} else if (1 < parcelas && parcelas <= 5) {
    precoPagarTotal = (precoTabela).toFixed(2)
    valorParcelas = (precoTabela / parcelas).toFixed(2)
} else if (5 < parcelas && parcelas <= 10) {
    precoPagarTotal = (precoTabela * 1.06).toFixed(2)
    valorParcelas = (precoPagarTotal / parcelas).toFixed(2)
} else if (10 < parcelas && parcelas <= 15) {
    precoPagarTotal = (precoTabela * 1.13).toFixed(2)
    valorParcelas = (precoPagarTotal / parcelas).toFixed(2)
}

if (1 <= parcelas && parcelas <= 15 && precoTabela >= 0) {
    document.write(`Valor de tabela = R$${(precoTabela).toFixed(2)}<br>`)
    document.write(`Valor total a pagar = R$${precoPagarTotal}<br>`)
    document.write(`Valor das parcelas = R$${valorParcelas}<br>`)
    document.write(`Número total de parcelas = ${parcelas}<br>`)
} else {
    document.write("Valores digitados inválidos --- ERRO<br>")
}

