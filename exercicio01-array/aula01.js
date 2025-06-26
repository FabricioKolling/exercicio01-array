const animais = ["Gato", "Cachorro", "Peixe", "Rato", "Macaco"];

function contarElementos(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    contador++;
  }
  return contador;
}