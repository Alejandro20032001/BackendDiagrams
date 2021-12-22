async function dibujarClase() {
  let nombre = prompt("Ingrese el nombre de la clase");
  let tamanioTexto = calcularAnchoTexto(nombre);
  let x = 150;

  if (tamanioTexto > 130) {
    x = tamanioTexto + 20;
  }

  const grupoNombre = new GrupoNombre(50, 50, nombre, x, 30);
  const grupoAtributos = new GrupoAtributos(50, 80, x, 50);
  const grupoMetodos = new GrupoMetodos(50, 130, x, 50);
  
  const clase = new Clase(grupoNombre, grupoAtributos, grupoMetodos);
  guardarClaseMongo(clase);
  
  clases.push(clase);
  pintarTodo();
}

function recalcularTamanios() {
  let grupoNombre = claseSeleccionada.grupoNombre;
  let grupoAtributos = claseSeleccionada.grupoAtributos;
  let grupoMetodos = claseSeleccionada.grupoMetodos;

  let tamanioTexto = calcularAnchoTexto(grupoNombre.nombre);

  if (tamanioTexto > grupoNombre.ancho - 20) {
    grupoNombre.ancho = tamanioTexto + 20;
    grupoAtributos.ancho = tamanioTexto + 20;
    grupoMetodos.ancho = tamanioTexto + 20;
  }

  let y = 0;

  grupoAtributos.atributos.forEach((atributo) => {
    y = y + calcularAltoTexto(atributo);
    tamanioTexto = calcularAnchoTexto(atributo);
    if (tamanioTexto > grupoNombre.ancho - 20) {
      grupoNombre.ancho = tamanioTexto + 20;
      grupoAtributos.ancho = tamanioTexto + 20;
      grupoMetodos.ancho = tamanioTexto + 20;
    }
  });

  if (y > grupoAtributos.alto - 15) {
    grupoAtributos.alto = y + 5;
    grupoMetodos.y = grupoAtributos.y + grupoAtributos.alto;
  }

  y = 0;

  grupoMetodos.metodos.forEach((metodo) => {
    y = y + calcularAltoTexto(metodo);
    tamanioTexto = calcularAnchoTexto(metodo);
    if (tamanioTexto > grupoNombre.ancho - 20) {
      grupoNombre.ancho = tamanioTexto + 20;
      grupoAtributos.ancho = tamanioTexto + 20;
      grupoMetodos.ancho = tamanioTexto + 20;
    }
  });

  if (y > grupoMetodos.alto - 15) {
    grupoMetodos.alto = y + 5;
  }
}
