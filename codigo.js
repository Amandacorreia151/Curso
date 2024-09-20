// let nota1 = Number (prompt("Digite a 1 nota:"))
// let nota2 = Number (prompt("Digite a 2 nota:"))
// let nota3= Number (prompt("Digite a 3 nota:"))

// let media =  (nota1 + nota2 + nota3) / 3
//  if (media >= 7){
//     alert (`Aprovado!, ${media.toFixed(2)}`)
//  }
// else {
//     alert (`Reprovado, ${media.toFixed(2)}`)
// }


// Calculadora IMC
let altura = Number (prompt("Digite a sua altura:").replaceAll(`,`,`.`))
let peso = Number (prompt("Digite o seu peso:").replaceAll(`,`,`.`))
let imc = peso / (altura ** 2) // altura²
//Análise de IMC 
if (imc < 18){
    alert (`Abaixo do peso, IMC: ${imc.toFixed(2)}`)
}
else if (imc <= 30){
    alert (`Peso ideal, iMC: ${imc.toFixed(2)}`)
}
else {
    alert (`Acima do peso, IMC : ${imc.toFixed(2)}`)
}
