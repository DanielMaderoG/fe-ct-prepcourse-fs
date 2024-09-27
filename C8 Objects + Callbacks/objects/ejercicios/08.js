function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  var michi = {};
  michi['nombre'] = nombre;
  michi['edad'] = edad;
  michi.meow = function () {
    return 'Meow!';
  }
  return michi;
}

module.exports = crearGato;
