function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  multiplicadoPorDos = [];
  for (let i=0; i < array.length; i++) {
    multiplicadoPorDos.push(array[i] * 2);
  }
  return multiplicadoPorDos;
}

module.exports = duplicarElementos;
