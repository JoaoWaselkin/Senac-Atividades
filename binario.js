const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Digite um numero menor que 32: "))

if(numero < 32){
  console.log(`O numero ${numero} em binario é: ${numero.toString(2)}`)
}
else if(numero > 32){
  console.log(`O numero ${numero} é maior que 32`)
}else{
  console.log("Tipo invalido, Digite um numero! ")
}