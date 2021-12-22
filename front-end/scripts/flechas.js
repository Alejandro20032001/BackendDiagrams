let uso = false;
let herencia = false;

let claseOrigen = null;
let claseDestino = null;

function dibujar(e) {
  let newUnion = new Union(claseOrigen, claseDestino, herencia);
  guardarUnionMongo(newUnion);
  uniones.push(newUnion);
  dibujarUniones();
}

function dibujarUnion(origen, destino, tipo, ctx) {
  let x1, x2, y1, y2;
  calcularDimensiones(-1, origen);
  x1 = origen.grupoNombre.x + (ancho / 2);
  y1 = origen.grupoNombre.y + (alto / 2);

  calcularDimensiones(-1, destino);
  x2 = destino.grupoNombre.x + (ancho / 2);
  y2 = destino.grupoNombre.y + (alto / 2);

  ctx.save();
  var dx = x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
  ctx.translate(x2,y2);
  ctx.rotate(Math.atan2(dy,dx));

  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(-len,0);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(-30,-30/2);
  ctx.lineTo(-30, 30/2);
  ctx.closePath();
  ctx.stroke();
  if(!tipo)
    ctx.fill();

  ctx.restore();
}

function dibujarUniones() {
  let canvas = document.getElementById("lienzo");
  let ctx = canvas.getContext("2d");
  for (let i = 0; i < uniones.length; i++) {
    let origen = uniones[i].origen;
    let destino = uniones[i].destino;
    dibujarUnion(origen, destino, uniones[i].herencia, ctx);
  }
}

function dibujarRelacion(e) {
  dibujar(e);
}

function setUso() {
  uso = true;
  herencia = false;
}

function setHerencia() {
  uso = false;
  herencia = true;
}