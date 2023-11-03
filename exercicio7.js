const startNumber1 = 10
let startNumber2 = startNumber1
const finishNumber = 100 
let sum1 = 0

do {
    sum1 = sum1 + startNumber2    
    startNumber2++
} while (startNumber2 >= startNumber1 && startNumber2 <= finishNumber)


document.write(`Valor inicial: ${startNumber1}<br>`)
document.write(`Valor final: ${finishNumber}<br>`)
document.write(`Soma do inicial até o final: ${sum1}`)
