function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let arrayDeCaracteres = string.split(''); // Convierte el string en un array de caracteres.
  let arrayInvertido = arrayDeCaracteres.reverse(); //Invierte el array de caracteres.
  let textoInvertido = arrayInvertido.join(''); // Une lo invertido en un string.
  if(textoInvertido === string){
    return true;
  } else {
    return false;
  }

}

module.exports = esPalindromo;