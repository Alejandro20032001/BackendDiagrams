function mostrarMenuMetodos() {
    let menu = document.getElementById("seccionMetodos");
    menu.style.display = 'block';

    let menu2 = document.getElementById("seccionAtributos");
    menu2.style.display = 'none';
}

function guardarMetodo() {
    let menu = document.getElementById("seccionMetodos");

    let nuevoMetodo = "";

    let accesoPublico = document.getElementById('publicoMetodo').checked;
    let accesoPrivado = document.getElementById('privadoMetodo').checked;
    let accesoProtegido = document.getElementById('protegidoMetodo').checked;
    let nombre = document.getElementById('nombreMetodo').value;
    let retorno = document.getElementById('retornoMetodo').value;
    let parametros = document.getElementById('parametros').value;

    if (accesoPublico) {
        nuevoMetodo = "+";
    }

    if (accesoPrivado) {
        nuevoMetodo = "-";
    }

    if (accesoProtegido) {
        nuevoMetodo = "#";
    }

    if (nombre === "" || retorno === "") {
        alert("El campo de nombre y tipo son obligatorios");
    } else {

        nuevoMetodo = nuevoMetodo + " " + nombre + "(" + parametros + ")" + ":" + retorno;

        claseSeleccionada.grupoMetodos.metodos.push(nuevoMetodo);
        menu.style.display = 'none';
        recalcularTamanios();
        claseSeleccionada = null;
        atributo = false;
        metodo = false;
        limpiarValores();
        pintarTodo();
    }
}