function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let arrayDeCaracteres = texto.split(''); // Convierte el string en un array de caracteres.
  let arrayInvertido = arrayDeCaracteres.reverse(); //Invierte el array de caracteres.
  let textoInvertido = arrayInvertido.join(''); // Une lo invertido en un string.
  return textoInvertido; 
  }

module.exports = invertirTexto;
