function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var arregloA = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      var temp = arrayOfStrings[i].split('');
      if( temp[0] === 'a' || temp[0 === 'A']) {
         arregloA.push(arrayOfStrings[i])
      }
   }
   return arregloA;
}

module.exports = filter;
