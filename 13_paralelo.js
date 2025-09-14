const prompt = require("prompt-sync")();

let r1 = parseFloat(prompt("Digite o primeiro valor: "))
let r2 = parseFloat(prompt("Digite o segundo valor: "))
let r3 = parseFloat(prompt("Digite o terceiro valor: "))

let p1 = (r1 * r2) / (r1 + r2)
let valorParalelo = p1 + r3

console.log(`O valor equivalente é de: ${valorParalelo.toFixed(2)}`)
