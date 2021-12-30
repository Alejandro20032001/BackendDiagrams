window.onresize = calcularTamanoLienzo;

function calcularTamanoLienzo() {
  let fondo = document.getElementById("contenedorLienzo");
  let alto = fondo.clientHeight;
  let ancho = fondo.clientWidth;

  lienzo = document.getElementById("lienzo");
  lienzo.setAttribute("height", alto + "");
  lienzo.setAttribute("width", ancho + "");

  diagrama = getCookie("idDiagrama");
  if (diagrama != null && diagrama != "") cargar();

  pintarTodo();
  draggInit();
}

function calcularAnchoTexto(texto) {
  let lienzo = document.getElementById("lienzo");
  lienzo = lienzo.getContext("2d");
  lienzo.font = "1em Arial";

  //let fontHeight = lienzo.measureText(texto).fontBoundingBoxAscent + lienzo.measureText(texto).fontBoundingBoxDescent;
  //let actualHeight = lienzo.measureText(texto).actualBoundingBoxAscent + lienzo.measureText(texto).actualBoundingBoxDescent;

  return Math.round(lienzo.measureText(texto).width);
}

function calcularAltoTexto(texto) {
  let lienzo = document.getElementById("lienzo");
  lienzo = lienzo.getContext("2d");
  lienzo.font = "1em Arial";

  let fontHeight =
    lienzo.measureText(texto).fontBoundingBoxAscent +
    lienzo.measureText(texto).fontBoundingBoxDescent;
  //let actualHeight = lienzo.measureText(texto).actualBoundingBoxAscent + lienzo.measureText(texto).actualBoundingBoxDescent;

  return fontHeight;
}
