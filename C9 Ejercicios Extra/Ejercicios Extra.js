/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let nuevoArray = [];
  for(let p in objeto) {
    nuevoArray.push([p, objeto[p]]); // p recorre cada propiedad del objeto y lo manda al array.
  }
  return nuevoArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
var minus = string.toLowerCase();
  var conteo = {};

  for (let p of minus) {
    conteo[p] = (conteo[p] || 0) + 1;
  };

  const conteoOrdenado = Object.keys(conteo)
  .sort()
  .reduce((obj, key) => {
      obj[key] = conteo[key];
      return obj;
  }, {});

return conteoOrdenado;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayusculas = '';
  var minusculas = '';

  for( let p of string) {
    if(p === p.toUpperCase()) {
      mayusculas += p;
    } else {
      minusculas += p;
    }
  };
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var palabra = frase.split(' '); // separa la frase en palabras con el espacio.

  var palabraInvertida = palabra.map(palabra => { // recorre cada palabra.
    return palabra.split('').reverse().join(''); // separa la palabra en letras, invierte el orden y las une,
  });
return palabraInvertida.join(' '); // une lo invertido con el espacio.
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var stringNumero = numero.toString();
  var invertido = stringNumero.split('').reverse().join('');
  if(stringNumero === invertido) return 'Es capicua';
  else return 'No es capicua';
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let nuevoStr = string.replace(/a|b|c/g,'');
  return nuevoStr;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var nuevoArreglo = arrayOfStrings.sort((a,b) => a.length - b.length);
  return nuevoArreglo;

}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  return array1.filter(valor => array2.includes(valor));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
