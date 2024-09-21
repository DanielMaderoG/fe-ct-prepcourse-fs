function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var compar = array[0];
  var indiMayor = 0;
  for(let i=1; i < array.length; i++) {
    if (compar < array[i]) {
      compar = array[i];
      indiMayor = i;
    }
  }
  return indiMayor;
  }

module.exports = encontrarIndiceMayor;
