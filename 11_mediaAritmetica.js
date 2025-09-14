const prompt = require("prompt-sync")();
let b1p1 = 9
let b1p2 = 8
let b2p1 = 6
let b2p2 = 10


let mediab1 = (b1p1 + b1p2)/2
let mediab2 = (b2p1 + b2p2)/2
let media = (mediab1 + mediab2)/2

console.log(`A sua media é de: ${media.toFixed(2)}`)