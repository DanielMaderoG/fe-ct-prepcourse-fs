function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var totalMeGusta = 0;
  var copiaArray = objetoUsuario.posts;
  for(let i = 0; i < copiaArray.length; i++) {
    totalMeGusta = totalMeGusta + copiaArray[i].likes;
  };
  return totalMeGusta;

}

module.exports = sumarLikesDeUsuario;
