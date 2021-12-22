let lienzo;
let lienzoOffset;
let offsetX;
let offsetY;
let isDown = false;
let lastX;
let lastY;
let draggingClase = -1;

let ancho = -1;
let alto = -1;

let claseSeleccionada = null;
let nombre = false;
let atributo = false;
let metodo = false;

function draggInit() {
  lienzo = document.getElementById("lienzo");
  offsetX = lienzo.offsetLeft;
  offsetY = lienzo.offsetTop;
  lienzo.addEventListener("mousedown", function (e) {
    handleMouseDown(e);
  });
  lienzo.addEventListener("mousemove", function (e) {
    handleMouseMove(e);
  });
  lienzo.addEventListener("mouseup", function (e) {
    handleMouseUp(e);
  });
  lienzo.addEventListener("mouseout", function (e) {
    handleMouseUp(e);
  });
  lienzo.addEventListener('dblclick',function(e){
    anadir(e);
  })
}

function anadir(e) {
  e.preventDefault();
  e.stopPropagation();

  for (let i = 0; i < clases.length; i++) {
    let clase = clases[i];
    let xInicial = clase.grupoNombre.x;
    let yInicial = clase.grupoNombre.y;

    if (lastX >= xInicial && lastX <= xInicial + clase.grupoNombre.ancho)
      if (lastY >= yInicial && lastY <= yInicial + clase.grupoNombre.alto){
        claseSeleccionada = clase;
        nombre = true;
      } 
  }

  for (let i = 0; i < clases.length; i++) {
    let clase = clases[i];
    let xInicial = clase.grupoAtributos.x;
    let yInicial = clase.grupoAtributos.y;

    if (lastX >= xInicial && lastX <= xInicial + clase.grupoAtributos.ancho)
      if (lastY >= yInicial && lastY <= yInicial + clase.grupoAtributos.alto){
        claseSeleccionada = clase;
        nombre = false;
        atributo = true;
      } 
  }

  for (let i = 0; i < clases.length; i++) {
    let clase = clases[i];
    let xInicial = clase.grupoMetodos.x;
    let yInicial = clase.grupoMetodos.y;

    if (lastX >= xInicial && lastX <= xInicial + clase.grupoMetodos.ancho)
      if (lastY >= yInicial && lastY <= yInicial + clase.grupoMetodos.alto){
        claseSeleccionada = clase;
        nombre = false;
        atributo = false;
        metodo = true;
      } 
  }

  if(atributo){
    mostrarMenuAtributos();
  }else{
    if(metodo){
    mostrarMenuMetodos();
    }else if(nombre){
      cambiarNombre();
    }
  }

}

function getClaseDe() {
  let pos = -1;
  for (let i = 0; i < clases.length; i++) {
    calcularDimensiones(i, null);
    let clase = clases[i];
    let xInicial = clase.grupoNombre.x;
    let yInicial = clase.grupoNombre.y;

    if (lastX >= xInicial && lastX <= xInicial + ancho)
      if (lastY >= yInicial && lastY <= yInicial + alto) pos = i;
  }
  return pos;
}

function handleMouseDown(e) {
  // tell the browser we'll handle this event
  e.preventDefault();
  e.stopPropagation();

  lastX = parseInt(e.clientX - offsetX);
  lastY = parseInt(e.clientY - offsetY);
  // hit test all existing circles
  let hit = getClaseDe();
  if (hit >= 0) {
    if (herencia || uso) {
      if (claseOrigen === null) claseOrigen = clases[hit];
      else if (claseDestino === null && claseOrigen !== clases[hit]){
        claseDestino = clases[hit];
        dibujarRelacion(e);
        herencia = uso = false;
        claseOrigen = claseDestino = null;
      }
      
    } else {
      calcularDimensiones(hit, null);
      draggingClase = clases[hit];
      isDown = true;
      pintarTodo();
    }
  }
  else {
    herencia = uso = false;
    claseOrigen = claseDestino = null;
  }
}

function handleMouseUp(e) {
  e.preventDefault();
  e.stopPropagation();
  isDown = false;  
}

function handleMouseMove(e) {
  if (!isDown) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  mouseX = parseInt(e.clientX - offsetX);
  mouseY = parseInt(e.clientY - offsetY);

  let dx = mouseX - lastX;
  let dy = mouseY - lastY;

  lastX = mouseX;
  lastY = mouseY;

  draggingClase.grupoNombre.x += dx;
  draggingClase.grupoNombre.y += dy;

  draggingClase.grupoAtributos.x += dx;
  draggingClase.grupoAtributos.y += dy;

  draggingClase.grupoMetodos.x += dx;
  draggingClase.grupoMetodos.y += dy;
  
  pintarTodo();
  
}

function calcularDimensiones(i, c) {
  ancho = 0;alto = 0;
  let clase;
  if (c !== null) clase = c;
  else clase = clases[i];
  ancho = clase.grupoNombre.ancho;
  
  let nombre = parseInt(clase.grupoNombre.alto);
  let atr = parseInt(clase.grupoAtributos.alto);
  let met = parseInt(clase.grupoMetodos.alto);
  alto = nombre + atr + met;
}



