async function guardar() {
  let nombreDiagrama = prompt("Nombre para el diagrama");
  let clasesIds = getIds(clases);
  let unionesIds = getIds(uniones);

  console.log(clasesIds, unionesIds);

  let diagrama = await crearDiagrama(clasesIds, unionesIds, nombreDiagrama);

  let usuario = await miPerfil();

  let idUsuario = usuario.user._id;
  let diagramsDone = usuario.user.diagramsDone;

  diagramsDone.push(diagrama._id);
  console.log(JSON.stringify({ diagramsDone }));
  console.log(await actualizarUsuario(idUsuario, { diagramsDone }));

  clases.forEach((clase) => {
    actualizarClasesMongo(clase);
  });

  const guardadoUniones = JSON.stringify(uniones);
  const guardadoClases = JSON.stringify(clases);

  localStorage.setItem("uniones", guardadoUniones);
  localStorage.setItem("clases", guardadoClases);
}

function cargar() {
  let unionesJson = JSON.parse(localStorage.getItem("uniones"));
  let clasesJson = JSON.parse(localStorage.getItem("clases"));

  for (let i = 0; i < clasesJson.length; i++) {
    clases.push(crearClase(clasesJson[i]));
  }

  for (let i = 0; i < unionesJson.length; i++) {
    uniones.push({
      origen: buscarClase(unionesJson[i].origen.id),
      destino: buscarClase(unionesJson[i].destino.id),
      herencia: unionesJson[i].herencia,
    });
  }
  pintarTodo();
}

function buscarClase(idClase) {
  let buscado = null;
  for (let i = 0; i < clases.length; i++) {
    if (clases[i].id === idClase) buscado = clases[i];
  }
  return buscado;
}

function crearClase(claseJson) {
  let nombre = claseJson.grupoNombre;
  let atributos = claseJson.grupoAtributos;
  let metodos = claseJson.grupoMetodos;

  return new Clase(
    new GrupoNombre(
      nombre.x,
      nombre.y,
      nombre.nombre,
      nombre.ancho,
      nombre.alto
    ),
    new GrupoAtributos(
      atributos.x,
      atributos.y,
      atributos.ancho,
      atributos.alto,
      atributos.atributos
    ),
    new GrupoMetodos(
      metodos.x,
      metodos.y,
      metodos.ancho,
      metodos.alto,
      metodos.metodos
    ),
    claseJson.id
  );
}

function getIds(array) {
  let ids = [];
  array.forEach((element) => {
    ids.push(element._id);
  });
  return ids;
}
