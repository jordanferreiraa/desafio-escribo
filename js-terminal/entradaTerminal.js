const readlineSync = require('readline-sync')

function somatorioMultiplos() {
  let numero = Number(readlineSync.question('Informe um numero: '))

  if (numero < 0 || !Number.isInteger(numero)) {
    console.log("Digite um numero inteiro e positivo.")
    return
  }

  let soma = 0

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i
    }
  }

  return soma
}

console.log(somatorioMultiplos())