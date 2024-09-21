function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var multiploSeis = [0,];
  var seis = 6;
  for (let i = 1; i < 11; i ++) {
    multiploSeis.push(seis * i)
  }
  if(multiploSeis.length === 11) {
    return multiploSeis;
  } 
}

module.exports = tablaDelSeis;
