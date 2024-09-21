function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var num = numeros[0];
  if(numeros.length === 0) return null;

  for(let i = 0;i < numeros.length; i++){
    if(numeros[i] !== num) {
      return num;
    }
    num++;
  }
  return null;
  }

module.exports = encontrarNumeroFaltante;