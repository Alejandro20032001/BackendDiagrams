function cambiarNombre() {
    let nuevoNombre = prompt("Ingrese el nombre de la clase");
    claseSeleccionada.grupoNombre.nombre = nuevoNombre;
    recalcularTamanios();
    actualizarClasesMongo(claseSeleccionada);
    pintarTodo();
  }

  