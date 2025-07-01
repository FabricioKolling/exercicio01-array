function separarParImpar(numeros) {
  const pares = [];
  const impares = [];

  // Usando forEach para percorrer o array
  numeros.forEach(numero => {
    if (numero % 2 === 0) {
      pares.push(numero);  // Adiciona ao array de pares
    } else {
      impares.push(numero);  // Adiciona ao array de ímpares
    }
  });

  return [pares, impares];  // Retorna um array com os dois arrays
}

// Testando a função
console.log(separarParImpar([1, 2, 3, 4, 5, 6]));
