// Relacionar las opciones del formulario con las imagenes del contenido
var playaValida = false;
document.getElementById("P1").addEventListener("click", function () {
    document.getElementById("playa").value = "1";
    playaValida = true;
});
document.getElementById("P2").addEventListener("click", function () {
    document.getElementById("playa").value = "2";
    playaValida = true;
});
document.getElementById("P3").addEventListener("click", function () {
    document.getElementById("playa").value = "3";
    playaValida = true;
});
document.getElementById("P4").addEventListener("click", function () {
    document.getElementById("playa").value = "4";
    playaValida = true;
});
document.getElementById("P5").addEventListener("click", function () {
    document.getElementById("playa").value = "5";
    playaValida = true;
});

// Comprobar si se ha elegido una playa
document.getElementById("playa").addEventListener("blur", function () {
    if (this.selectedIndex !== 0) {
        document.getElementById("infoPlaya").style = "display: none";
        this.blur();
        return playaValida = true;
    } else {
        document.getElementById("infoPlaya").style = "color: red; display: inline";
        return playaValida = false;
    }
});

// Comprobar si el nombre introducido es válido
var nombreValido = false;
function nombreCorrecto() {
    var nombre = this.value
    // El patron acepta letras, acentos y espacios
    if (/^([a-záéíóúñ]+[\s]?)+$/i.test(nombre)) {
        document.getElementById("infoNombre").style = "display: none";
        this.blur();
        return nombreValido = true;
    } else {
        if (nombre === "") {
            document.getElementById("infoNombre").style = "display: none";
        } else {
            document.getElementById("infoNombre").style = "color: red; display: inline";
            this.focus();
        }
        return nombreValido = false;
    }
}
document.getElementById("nombre").addEventListener("blur", nombreCorrecto);

// Comprobar si el apellido introducido es válido
var apellidoValido = false;
function apellidoCorrecto() {
    var apellido = this.value;
    // El patron acepta letras, acentos y espacios
    if (/^([a-záéíóúñ]+[\s]?)+$/i.test(apellido)) {
        document.getElementById("infoApellido").style = "display: none";
        this.blur();
        return apellidoValido = true;
    } else {
        if (apellido === "") {
            document.getElementById("infoApellido").style = "display: none";
        } else {
            document.getElementById("infoApellido").style = "color: red; display: inline";
            this.focus();
        }
        return apellidoValido = false;
    }
}
document.getElementById("apellido").addEventListener("blur", apellidoCorrecto);

// Comprobar si el correo introducido es válido
var correoValido = false;
function correoCorrecto() {
    var correo = this.value;
    // El patron acepta cualquier número de caracteres seguido por una arroba
    // al menos dos caracteres más, un punto y al menos otros dos caracteres más
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(correo)) {
        document.getElementById("infoCorreo").style = "display: none";
        this.blur();
        return correoValido = true;
    } else {
        if (correo === "") {
            document.getElementById("infoCorreo").style = "display: none";
        } else {
            document.getElementById("infoCorreo").style = "color: red; display: inline";
            this.focus();
        }
        return correoValido = false;
    }
}
document.getElementById("correo").addEventListener("blur", correoCorrecto);

// Comprobar si el telefono introducido es válido
var telefonoValido = false;
function telefonoCorrecto() {
    var telefono = this.value;
    if (/^([0-9]{9})+$/.test(telefono)) {
        document.getElementById("infoTelefono").style = "display: none";
        this.blur();
        return telefonoValido = true;
    } else {
        if (telefono === "") {
            document.getElementById("infoTelefono").style = "display: none";
        } else {
            document.getElementById("infoTelefono").style = "color: red; display: inline";
            this.focus();
        }
        return telefonoValido = false;
    }
}
document.getElementById("telefono").addEventListener("blur", telefonoCorrecto);

// Borrar mensaje de alerta si se elige un sexo
document.getElementById("sexo").addEventListener("click", function () {
    document.getElementById("infoSexo").style = "display: none";
});

// Comprobar que se ha introducido una fecha valida
var fechaValida = false;
function fechaCorrecta() {
    var hoy = new Date();
    if (this.value !== "") {
        var fechaArr = this.value.split("-").map(Number);
        var fecha = new Date();
        fecha.setFullYear(fechaArr[0], fechaArr[1] - 1, fechaArr[2]);
        // console.log(fecha);
        // console.log(hoy);
        if (fecha < hoy) {
            document.getElementById("infoFecha").style = "display: none";
            return fechaValida = true;
        }
    }
    document.getElementById("infoFecha").style = "color: red; display: inline";
    return fechaValida = false;
}
document.getElementById("fechaNac").addEventListener("blur", fechaCorrecta);

// Comprobar si la dirección introducida es válido
var direccionValida = false;
function direccionCorrecta() {
    var direccion = this.value;
    // El patron acepta letras, números, acentos, el simbolo º y espacios
    if (/^([a-záéíóúñº0-9]+[\s]?)+$/i.test(direccion)) {
        document.getElementById("infoDireccion").style = "display: none";
        this.blur();
        return direccionValida = true;
    } else {
        if (direccion === "") {
            document.getElementById("infoDireccion").style = "display: none";
        } else {
            document.getElementById("infoDireccion").style = "color: red; display: inline";
            this.focus();
        }
        return direccionValida = false;
    }
}
document.getElementById("direccion").addEventListener("blur", direccionCorrecta);

// Comprobar si se ha elegido un código postal
var codigoValido = false;
document.getElementById("codigoPostal").addEventListener("blur", function () {
    if (this.selectedIndex !== 0) {
        document.getElementById("infoCodigo").style = "display: none";
        this.blur();
        return codigoValido = true;
    } else {
        document.getElementById("infoCodigo").style = "color: red; display: inline";
        return codigoValido = false;
    }
});

// Comprobar si se han aceptado las condiciones
var aceptaCondiciones = true;
document.getElementById("condiciones").addEventListener("blur", function () {
    if (this.checked) {
        document.getElementById("infoCondiciones").style = "display: none";
        this.blur();
        return aceptaCondiciones = true;
    } else {
        document.getElementById("infoCondiciones").style = "color: red; display: inline";
        return aceptaCondiciones = false;
    }
});

// Validación para enviar o registrar una reserva
function validacion() {

    // Comprobar si se ha elegido un sexo
    var sexoValido = document.getElementById("hombre").checked || document.getElementById("mujer").checked;
    var mascotaValida2 = mascotaValida || mascotaValida1 ||
            !(document.getElementById("mascotas").checked);

    // Comprobar cada uno de los inputs para mostrar notificaciones donde corresponda
    if (!playaValida) {
        document.getElementById("infoPlaya").style = "color: red; display: inline";
    }
    if (!nombreValido) {
        document.getElementById("infoNombre").style = "color: red; display: inline";
    }
    if (!apellidoValido) {
        document.getElementById("infoApellido").style = "color: red; display: inline";
    }
    if (!correoValido) {
        document.getElementById("infoCorreo").style = "color: red; display: inline";
    }
    if (!telefonoValido) {
        document.getElementById("infoTelefono").style = "color: red; display: inline";
    }
    if (!sexoValido) {
        document.getElementById("infoSexo").style = "color: red; display: inline";
    }
    if (!fechaValida) {
        document.getElementById("infoFecha").style = "color: red; display: inline";
    }
    if (!direccionValida) {
        document.getElementById("infoDireccion").style = "color: red; display: inline";
    }
    if (!codigoValido) {
        document.getElementById("infoCodigo").style = "color: red; display: inline";
    }
    if (!mascotaValida2) {
        document.getElementById("infoMascota").style = "color: red; display: inline";
    }

    // Si encontramos algun campo que no tiene el valor esperado, se devuelve false
    //return true;
    return  playaValida * nombreValido * apellidoValido * correoValido *
            telefonoValido * sexoValido * fechaValida *
            direccionValida * codigoValido * mascotaValida2 * aceptaCondiciones;
}

// Función para almacenar los datos del formulario en un array de objetos
// Array de objetos
var arrRegistro = [];
function registrar() {

    // Se comprueba si los datos son válidos
    if (validacion()) {
        // Crear un nuevo objeto con las propiedades indicadas en el formulario
        var persona = new Object();
        persona.playa = document.getElementById("playa").value;
        persona.nombre = document.getElementById("nombre").value;
        persona.apellido = document.getElementById("apellido").value;
        persona.correo = document.getElementById("correo").value;
        persona.telefono = document.getElementById("telefono").value;
        persona.sexo = document.getElementById("hombre").checked ? "Hombre" : "Mujer";
        persona.fechaNac = document.getElementById("fechaNac").value;
        persona.direccion = document.getElementById("direccion").value;
        persona.codigoPostal = document.getElementById("codigoPostal").value;
        persona.foto = document.getElementById("foto").value; //fakepath
        if (document.getElementById("mascotas").checked) {
            if (document.getElementById("selectMascotas").value === "Otro") {
                if (document.getElementById("inputMascotas").value === "") {
                    persona.mascota = "Otra mascota";
                } else {
                    persona.mascota = document.getElementById("inputMascotas").value;
                }
            } else {
                persona.mascota = document.getElementById("selectMascotas").value;
            }
        } else {
            persona.mascota = "Sin mascota";
        }
        arrRegistro.push(persona);

        //Pintar el nuevo registro en la tabla
        var tableRow = document.createElement("tr");
        for (var e in persona) {
            var tableCol = document.createElement("td");
            var eNode = document.createTextNode(persona[e]);
            tableCol.appendChild(eNode);
            tableRow.appendChild(tableCol);
        }
        document.getElementById("tablaRegistro").appendChild(tableRow);

        // Borrar elementos
        var inputs = document.getElementsByClassName("form-control");
        var inputsLen = inputs.length;
        for (var i = 0; i < inputsLen; i++) {
            inputs[i].value = "";
        }
        // Devolver los valores de validación a falso
        playaValida = false;
        nombreValido = false;
        apellidoValido = false;
        correoValido = false;
        fechaValida = false;
        direccionValida = false;
        codigoValido = false;
        mascotaValida = false;

        // Borra el mensaje de alerta del registro
        document.getElementById("infoRegistro").style = "display: none";
        return true;
    } else {
        document.getElementById("infoRegistro").style = "color: red; display: inline";
        return false;
    }
}

// Felicitar cumpleaños
function felicitar() {
    if (registrar()) {
        // Se obtiene el dia y el mes actual
        var hoy = new Date();
        var dayHoy = hoy.getDate();
        var monthHoy = hoy.getMonth();
        var felicitacion = "";
        // Por cada persona registrada
        arrRegistro.forEach(function (p) {
            // Se obtiene el dia y el mes de su nacimiento
            var fechaArr = p.fechaNac.split("-").map(Number);
            var month = fechaArr[1] - 1;
            var day = fechaArr[2];
            // Si coinciden con el día de hoy se introducen en el string
            if (dayHoy === day && monthHoy === month) {
                felicitacion += "Feliz cumpleaños " + p.nombre + " " + p.apellido + "<br>";
                document.getElementById("fixed").style = "display: inline";
            }
        });
        // Se introducen las felicitaciones en un bloque fijo
        document.getElementById("felicitacion").innerHTML = felicitacion;
    }
}
document.getElementById("registrar").addEventListener("click", felicitar);

// Borrar el ampo texto para escribir otra mascota si se hace click en
// el botón borrar campos
function borrado() {
    document.getElementById("selectMascotas").style = "display: none";
    if (document.getElementById("inputMascotas") !== null) {
        document.getElementById("divOtraMascota")
                .removeChild(document.getElementById("inputMascotas"));
    }
}
document.getElementById("borrar").addEventListener("click", borrado);

// Crear menú desplegable si se selecciona el checkbox mascotas
function elegirMascota() {
    var listaMascotas = document.getElementById("selectMascotas");
    // Mostrar o esconder la lista desplegable dependiendo si
    // se selecciona el checkbox mascotas
    if (this.checked) {
        listaMascotas.style = "display: inline";
    } else {
        listaMascotas.style = "display: none";
        if (document.getElementById("inputMascotas") !== null) {
            document.getElementById("divOtraMascota")
                    .removeChild(document.getElementById("inputMascotas"));
        }
        listaMascotas.selectedIndex = 0;
    }
}
document.getElementById("mascotas").addEventListener("click", elegirMascota);

// Comprobar si se ha elegido una mascota del menú desplegable si se ha marcado
// la caslla mascotas
var mascotaValida1 = false;
document.getElementById("selectMascotas").addEventListener("blur", function () {
    // Si se ha marcado la casilla de mascotas
    if (document.getElementById("mascotas").checked) {
        // Si no se ha marcado Otro (Ver mascotaCorrecta())
        if (this.value !== "Otro") {
            // Si se ha seleccionado alguna opción se borra el mensaje de alerta
            if (this.selectedIndex !== 0) {
                document.getElementById("infoMascota").style = "display: none";
                this.blur();
                return mascotaValida1 = true;
            }
            // Si se ha seleccionado la opción vacía se muestra el mensaje de alerta
            document.getElementById("infoMascota").style = "color: red; display: inline";
            return mascotaValida1 = false;
        }
        // Si se ha marcado Otro no se muestra la alerta pero devuelve falso
        document.getElementById("infoMascota").style = "display: none";
        return mascotaValida1 = false;
    }
});

// Crear campo texto para escribir otra mascota y validación del input
var mascotaValida = false;
function escribirMascota() {
    if (this.value === "Otro") {
        if (document.getElementById("inputMascotas") === null) {
            // Crear campo texto para escribir otra mascota
            var textoMascotas = document.createElement("input");
            textoMascotas.setAttribute("id", "inputMascotas");
            textoMascotas.setAttribute("class", "form-control");
            textoMascotas.setAttribute("type", "text");
            textoMascotas.setAttribute("placeholder", "Escriba el tipo de mascota");
            textoMascotas.setAttribute("name", "otraMascota");
            document.getElementById("divOtraMascota").appendChild(textoMascotas);
        }
        // Comprobar si el nombre introducido es válido
        function mascotaCorrecta() {
            var mascota = this.value;
            if (/^([a-záéíóúñ]+[\s]?)+$/i.test(mascota)) {
                document.getElementById("infoMascota").style = "display: none";
                this.blur();
                return mascotaValida = true;
            } else {
                if (mascota === "") {
                    document.getElementById("infoMascota").style = "display: none";
                } else {
                    document.getElementById("infoMascota").style = "color: red; display: inline";
                    this.focus();
                }
                return mascotaValida = false;
            }
        }
        document.getElementById("inputMascotas").addEventListener("blur", mascotaCorrecta);
    // Si se cambia la opción de la lista desplegable se borra el elemento
    } else if (document.getElementById("inputMascotas") !== null) {
        document.getElementById("divOtraMascota")
                .removeChild(document.getElementById("inputMascotas"));
    }
}
document.getElementById("selectMascotas").addEventListener("click", escribirMascota);

// Borrar mensaje de alerta si se desmarca la casilla mascotas
document.getElementById("mascotas").addEventListener("click", function () {
    if (!this.checked) {
        document.getElementById("infoMascota").style = "display: none";
    }
});

// Habilitar popovers
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

// Contar el número de letras en la dirección
$("#direccion").keyup(function () {
    if (this === document.activeElement) {
        $("#count").text($(this).val().length + "/200");
    }
});
document.getElementById("direccion").addEventListener("blur", function () {
    document.getElementById("count").innerHTML = "";
});
