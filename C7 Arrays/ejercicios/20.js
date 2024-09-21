function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  primerValor = array[0];
  for (let i = 1; i < array.length; i++) {
    if( array[i] !== primerValor) {
      return false;
    }else{
      return true;
    }
  }
}

module.exports = todosIguales;
