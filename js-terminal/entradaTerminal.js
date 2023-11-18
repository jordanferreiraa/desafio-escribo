const readlineSync = require('readline-sync')

function somatorioMultiplos() {
  let numero = Number(readlineSync.question('Informe um numero: '))

  if (numero < 0 || !Number.isInteger(numero)) {
    console.log("Digite um numero inteiro e positivo.")
    return
  }

  let soma = 0
  let numerosDivisiveis = []

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i
      numerosDivisiveis.push(i)
    }
  }

  console.log(`Soma final: ${soma}`)
  console.log(`Numeros divisiveis por 3 ou 5: ${numerosDivisiveis}`)
}

somatorioMultiplos()