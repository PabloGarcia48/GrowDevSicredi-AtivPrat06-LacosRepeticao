let salarioUsuario = Number(prompt('Digite o seu salário'))

    if(salarioUsuario < 1903.98) {
        document.write(`Inseto de Imposto de Renda`)
    } else {
        document.write(`Tributado no Imposto de Renda`)
    }