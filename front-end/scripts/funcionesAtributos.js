function mostrarMenuAtributos() {
    let menu = document.getElementById("seccionAtributos");
    menu.style.display = 'block';

    let menu2 = document.getElementById("seccionMetodos");
    menu2.style.display = 'none';
}

function guardarAtributo() {
    let menu = document.getElementById("seccionAtributos");

    let nuevoAtributo = "";

    let accesoPublico = document.getElementById('publicoAtri').checked;
    let accesoPrivado = document.getElementById('privadoAtri').checked;
    let accesoProtegido = document.getElementById('protegidoAtri').checked;
    let nombre = document.getElementById('nombreAtri').value;
    let tipo = document.getElementById('tipoAtri').value;

    if (accesoPublico) {
        nuevoAtributo = "+";
    }

    if (accesoPrivado) {
        nuevoAtributo = "-";
    }

    if (accesoProtegido) {
        nuevoAtributo = "#";
    }

    if (nombre === "" || tipo === "") {
        alert("Ambos campos son obligatorios");
    } else {
        nuevoAtributo = nuevoAtributo + " " + nombre + ":" + tipo;

        claseSeleccionada.grupoAtributos.atributos.push(nuevoAtributo);
        menu.style.display = 'none';
        recalcularTamanios();
        claseSeleccionada = null;
        atributo = false;
        metodo = false;
        limpiarValores();
        pintarTodo();
    }
}

function limpiarValores() {
    let nombreAtributo = document.getElementById('nombreAtri');
    let tipoAtributo = document.getElementById('tipoAtri');
    nombreAtributo.value = "";
    tipoAtributo.value = "";


    let nombre = document.getElementById('nombreMetodo');
    let retorno = document.getElementById('retornoMetodo');
    let parametros = document.getElementById('parametros');
    nombre.value = "";
    retorno.value = "";
    parametros.value = "";
}