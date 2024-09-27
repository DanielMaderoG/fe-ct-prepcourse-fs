const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var conteo = 0;
  for(var p in objeto) {
    if(objeto.hasOwnProperty(p)) {
      conteo++;
    }
  }
  return conteo;
};

module.exports = contarPropiedades;
