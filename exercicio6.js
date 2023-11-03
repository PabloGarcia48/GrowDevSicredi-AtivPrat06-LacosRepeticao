let counter = 0
let max = 60

if (counter <= max) {
    for (let i = 1; i <= max; i++) {
        if (i %2 != 0) {
            document.write(` ${i};`)
            counter++
        }
    }    
}

document.write(`<br>Quantidade de números ímpares = ${counter}`)