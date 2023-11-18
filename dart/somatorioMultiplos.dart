//dart compile exe .\somatorioMultiplos.dart
//somatorioMultiplos.exe 
import 'dart:io';

void somatorioMultiplos() {
  stdout.write("Digite um número inteiro e positivo: ");
  String? input = stdin.readLineSync();
  
  if (input == null) {
    print("Entrada inválida.");
    return;
  }

  try {
    int numero = int.parse(input);

    if (numero < 0 || numero % 1 != 0) {
      print("Digite um número inteiro e positivo.");
      return;
    }

    int soma = 0;
    List<int> numerosDivisiveis = [];

    for (int i = 1; i < numero; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        soma += i;
        numerosDivisiveis.add(i);
      }
    }

    print("Soma final: $soma");
    print("Números divisíveis por 3 ou 5: $numerosDivisiveis");
  } catch (e) {
    print("Entrada inválida. Digite um número inteiro e positivo.");
  }
}

void main() {
  somatorioMultiplos();
}
