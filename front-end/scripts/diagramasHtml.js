async function crearListaDiagramas() {
  let diagramsDone = await miPerfil();
  diagramsDone = diagramsDone.user.diagramsDone;

  let docDiagrama = document.getElementById("ListaDiagramas");
  let ul = document.createElement("ul");

  console.log(diagramsDone);
  for (let i = 0; i < diagramsDone.length; i++) {
    let diagram = await getDiagram(diagramsDone[i]);
    let li1 = document.createElement("li");
    let li1Texto = document.createTextNode(diagram.nombreDiagrama);
    li1.addEventListener("mousedown", function () {
      irDiagramador(diagram);
    });
    li1.appendChild(li1Texto);

    ul.appendChild(li1);
  }
  docDiagrama.append(ul);
}

function irDiagramador(diagrama) {
  const clasesMongo = diagrama.clases;
  const unionesMongo = diagrama.uniones;
  castClases(clasesMongo);
  console.log(diagrama);
  console.log(diagrama.clases);
  console.log(diagrama.uniones);

  unionesMongo.forEach((union) => {
    console.log(union.claseOrigen._id);
    console.log(union.claseFin._id);
    uniones.push({
      origen: buscarClase(union.claseOrigen._id),
      destino: buscarClase(union.claseFin._id),
      herencia: union.tipoUnion,
    });
  });
  const guardadoUniones = JSON.stringify(uniones);
  const guardadoClases = JSON.stringify(clases);

  localStorage.setItem("uniones", guardadoUniones);
  localStorage.setItem("clases", guardadoClases);
  setCookie("idDiagrama", diagrama._id, 1);
  location.href = "./index.html";
}

function castClases(clasesMongo) {
  clasesMongo.forEach((clase) => {
    let atributos = clase.grupoAtributos;
    let metodos = clase.grupoMetodos;
    let nombre = clase.grupoNombre;

    let nuevaClase = new Clase( 
      new GrupoNombre(
        nombre.x,
        nombre.y,
        nombre.contenido[0],
        nombre.ancho,
        nombre.alto
      ),
      new GrupoAtributos(
        atributos.x,
        atributos.y,
        atributos.ancho,
        atributos.alto
      ),
      new GrupoMetodos(metodos.x, metodos.y, metodos.ancho, metodos.alto)
    );
    nuevaClase._id = clase._id;
    nuevaClase.grupoNombre._id = clase.grupoNombre._id;
    nuevaClase.grupoAtributos._id = clase.grupoAtributos._id;
    nuevaClase.grupoAtributos.atributos = clase.grupoAtributos.contenido;
    nuevaClase.grupoMetodos._id = clase.grupoMetodos._id;
    nuevaClase.grupoMetodos.metodos = clase.grupoMetodos.contenido;

    console.log(nuevaClase);
    clases.push(nuevaClase);
  });
}
