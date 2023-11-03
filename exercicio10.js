   let altura = Number(prompt(`Digite a sua altura`))
   let genero = Number(prompt('Digite 1 para sexo feminino ou 2 para sexo masculino'))

    if(genero == 1) {
        pesoIdeal = ((altura * 62.1) - 44.7).toFixed(2)
        document.write(`Seu peso ideal é ${pesoIdeal}`)
    } else if (genero == 2) {
        pesoIdeal = ((altura * 72.7) - 58).toFixed(2)
        document.write(`Seu peso ideal é: ${pesoIdeal}kg`)
    } else {
        document.write(`Digite um número válido`)
    }