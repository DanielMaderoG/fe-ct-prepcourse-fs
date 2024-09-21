function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  nuevoArregloPares = [];
  for(let i = 0; i < array.length; i++) {
     if (array[i] % 2 === 0) {
     nuevoArregloPares.push(array[i]);
  }}
  return nuevoArregloPares;
}

module.exports = filtrarNumerosPares;
