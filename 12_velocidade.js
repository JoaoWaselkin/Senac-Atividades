const prompt = require("prompt-sync")();
let ms = parseFloat(prompt("Digite a velocidade em m/s: "))

let km = ms * 3.6

console.log(`A velocidade em km/h é de: ${km}`)