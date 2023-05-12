var numeros = [2, 6, 8, 15, 17, 22, 7, 14];

var numerosPares = [];
var numerosImpares = [];

var numeroMayor = numeros[0];

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares.push(numeros[i]);
  } else {
    numerosImpares.push(numeros[i]);
  }

  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}

console.log('Números pares:', numerosPares);

console.log('Números impares:', numerosImpares);

console.log('Número mayor:', numeroMayor);
