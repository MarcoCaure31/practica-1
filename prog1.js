var autos = ['Nissan', 'Honda', 'Ford', 'Toyota', 'Alfa Romeo'];

var marcaMasLetras = '';

console.log('Auto de marca Toyota:', autos.find(auto => auto === 'Toyota'));

for (var i = 0; i < autos.length; i++) {
  if (autos[i].length > marcaMasLetras.length) {
    marcaMasLetras = autos[i];
  }
}

console.log('Marca con más letras:', marcaMasLetras);
