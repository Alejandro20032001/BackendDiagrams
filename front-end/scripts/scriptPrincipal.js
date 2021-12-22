
let clases = [];
let uniones = [];
let token = null;

function pintarTodo() {
  let lienzo = document.getElementById("lienzo");
  let width = lienzo.width;
  let height = lienzo.height;
  lienzo = lienzo.getContext("2d");
  lienzo.clearRect(0, 0, ancho, alto);
  lienzo.font = "1em Arial";
  lienzo.lineWidth = "2";

  lienzo.clearRect(0, 0, width, height);

  clases.forEach((element) => {
    let grupoNombre = element.grupoNombre;
    let grupoAtributos = element.grupoAtributos;
    let grupoMetodos = element.grupoMetodos;

    lienzo.strokeRect(
      grupoNombre.x,
      grupoNombre.y,
      grupoNombre.ancho,
      grupoNombre.alto
    );

    lienzo.textAlign = "center";

    lienzo.fillText(
      grupoNombre.nombre,
      grupoNombre.x + grupoNombre.ancho / 2,
      grupoNombre.y + grupoNombre.alto / 2 + 5
    );

    lienzo.strokeRect(
      grupoAtributos.x,
      grupoAtributos.y,
      grupoAtributos.ancho,
      grupoAtributos.alto
    );

    lienzo.textAlign = "start";

    let y = 0;

    grupoAtributos.atributos.forEach((atributo) => {
      y = y + calcularAltoTexto(atributo);
      lienzo.fillText(atributo, grupoAtributos.x + 5, grupoAtributos.y + y);
    });

    lienzo.strokeRect(
      grupoMetodos.x,
      grupoMetodos.y,
      grupoMetodos.ancho,
      grupoMetodos.alto
    );

    y = 0;

    grupoMetodos.metodos.forEach((metodo) => {
      y = y + calcularAltoTexto(metodo);
      lienzo.fillText(metodo, grupoMetodos.x + 5, grupoMetodos.y + y);
    });
  });
  if (uniones.length > 0) dibujarUniones();
}

