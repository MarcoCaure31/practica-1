function fibonacci(n) {
    var sequence = [0, 1]; // Inicializar la secuencia con los primeros dos números
  
    for (var i = 2; i < n; i++) {
      var nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }
  
  // Obtener los primeros 7 números de Fibonacci
  var primeros7Fibonacci = fibonacci(7);
  
  // Mostrar los primeros 7 números de Fibonacci
  console.log(primeros7Fibonacci);
  