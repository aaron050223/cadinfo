const enlaceRegistro = document.querySelector(".registrarse");
const correoUsuarioInput = document.querySelector(".Introducir_correo_electronico");
const constraseniaUsuarioInput = document.querySelector(".Introducir_contraseña")
const nombreUsuarioInput = document.querySelector(".Introducir_nombre");
const apellidosUsuarioInput = document.querySelector(".Introducir_apellidos");

let comprobarCorreo = false;
let comprobarContrasenia = false;
let comprobarNombre = false;
let comprobarApellidos = false;

// Compruebo el correo
correoUsuarioInput.addEventListener("blur", function() {
    const correoUsuarioGuardado = correoUsuarioInput.value.trim();

    // Creamos o seleccionamos el mensaje de error
    let mensajeError = document.querySelector(".errorCorreo");
    if (!mensajeError) {
        mensajeError = document.createElement("div");
        mensajeError.className = "errorCorreo"; // Le damos una clase para poder seleccionarlo luego
        correoUsuarioInput.insertAdjacentElement("afterend", mensajeError); // Insertamos el mensaje después del input
    }

    // He visto que esta expresion regula bastante bien los correos, asi que la he usado
    const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

    // Estilo del mensaje de error
    mensajeError.textContent = ""; // Mensaje de error (Vacio para modificarlo luego con el fallo correspondiente)
    mensajeError.style.marginLeft = "32px";
    mensajeError.style.marginTop = "16px";
    mensajeError.style.fontFamily = "Roboto Light, sans-serif";
    mensajeError.style.color = "red"; // El mensaje será rojo

    // Validación del correo
    if (correoUsuarioGuardado === "") {
        correoUsuarioInput.style.color = "red";
        mensajeError.textContent = "Parámetro vacío."; // Mensaje de error
        comprobarCorreo = false;
    } else if (!formatoCorreo.test(correoUsuarioGuardado)) { // Con el test compruebo que tenga el formato de antes
        mensajeError.textContent = "Parámetro incorrecto."; // Mensaje de error
        correoUsuarioInput.style.color = "red";
        comprobarCorreo = false;
    } else {
        correoUsuarioInput.style.color = "green"; // Si es valido se cambia el color a verde
        mensajeError.textContent = ""; // Elimino el mensaje de error
        comprobarCorreo = true;
    }
});

// Compruebo la contraseña
constraseniaUsuarioInput.addEventListener("blur", function() {
    const constraseniaUsuarioGuardado = constraseniaUsuarioInput.value.trim();

    // Creamos o seleccionamos el mensaje de error
    let mensajeError = document.querySelector(".errorContrasenia");
    if (!mensajeError) {
        mensajeError = document.createElement("div");
        mensajeError.className = "errorContrasenia"; // Le damos una clase para poder seleccionarlo luego
        constraseniaUsuarioInput.insertAdjacentElement("afterend", mensajeError); // Insertamos el mensaje después del input
    }

    mensajeError.textContent = ""; // Mensaje de error (Vacio para modificarlo luego con el fallo correspondiente)
    mensajeError.style.marginLeft = "32px";
    mensajeError.style.marginTop = "16px";
    mensajeError.style.fontFamily = "Roboto Light, sans-serif";
    mensajeError.style.color = "red"; // El mensaje será rojo

    // Validación del correo
    if (constraseniaUsuarioInput.value.trim() === "") {
        constraseniaUsuarioInput.style.color = "red";
        mensajeError.textContent = "Parámetro vacío."; // Mensaje de error
        comprobarContrasenia = false;
    } else if (constraseniaUsuarioInput.value.trim().length < 6) { // Con el test compruebo que tenga el formato de antes
        constraseniaUsuarioInput.style.color = "red";
        mensajeError.textContent = "La contraseña debe tener mínimo 6 caracteres."; // Mensaje de error
        comprobarContrasenia = false;
    } else {
        constraseniaUsuarioInput.style.color = "green"; // Si es valido se cambia el color a verde
        mensajeError.textContent = ""; // Elimino el mensaje de error
        comprobarContrasenia = true;
    }
});

// Compruebo el nombre
nombreUsuarioInput.addEventListener("blur", function() {
    const nombreUsuarioGuardado = nombreUsuarioInput.value.trim();

    // Creamos o seleccionamos el mensaje de error
    let mensajeError = document.querySelector(".errorNombre");
    if (!mensajeError) {
        mensajeError = document.createElement("div");
        mensajeError.className = "errorNombre"; // Le damos una clase para poder seleccionarlo luego
        nombreUsuarioInput.insertAdjacentElement("afterend", mensajeError); // Insertamos el mensaje después del input
    }

    mensajeError.textContent = ""; // Mensaje de error (Vacio para modificarlo luego con el fallo correspondiente)
    mensajeError.style.marginLeft = "32px";
    mensajeError.style.marginTop = "16px";
    mensajeError.style.fontFamily = "Roboto Light, sans-serif";
    mensajeError.style.color = "red"; // El mensaje será rojo

    // Validación del correo
    if (nombreUsuarioInput.value.trim() === "") {
        nombreUsuarioInput.style.color = "red";
        mensajeError.textContent = "Parámetro vacío."; // Mensaje de error
        comprobarNombre = false;
    } else if (nombreUsuarioInput.value.trim().length < 3) { // Con el test compruebo que tenga el formato de antes
        nombreUsuarioInput.style.color = "red";
        mensajeError.textContent = "El nombre debe tener mínimo 3 caracteres."; // Mensaje de error
        comprobarNombre = false;
    } else {
        nombreUsuarioInput.style.color = "green"; // Si es valido se cambia el color a verde
        mensajeError.textContent = ""; // Elimino el mensaje de error
        comprobarNombre = true;
    }
});

// Compruebo el apellido
apellidosUsuarioInput.addEventListener("blur", function() {
    const apellidosUsuarioGuardado = apellidosUsuarioInput.value.trim();

    // Creamos o seleccionamos el mensaje de error
    let mensajeError = document.querySelector(".errorApellido");
    if (!mensajeError) {
        mensajeError = document.createElement("div");
        mensajeError.className = "errorApellido"; // Le damos una clase para poder seleccionarlo luego
        apellidosUsuarioInput.insertAdjacentElement("afterend", mensajeError); // Insertamos el mensaje después del input
    }

    mensajeError.textContent = ""; // Mensaje de error (Vacio para modificarlo luego con el fallo correspondiente)
    mensajeError.style.marginLeft = "32px";
    mensajeError.style.marginTop = "16px";
    mensajeError.style.fontFamily = "Roboto Light, sans-serif";
    mensajeError.style.color = "red"; // El mensaje será rojo

    // Validación del correo
    if (apellidosUsuarioInput.value.trim() === "") {
        apellidosUsuarioInput.style.color = "red";
        mensajeError.textContent = "Parámetro vacío."; // Mensaje de error
        comprobarApellidos = false;
    } else if (apellidosUsuarioInput.value.trim().length < 4) { // Con el test compruebo que tenga el formato de antes
        apellidosUsuarioInput.style.color = "red";
        mensajeError.textContent = "El apellido debe tener mínimo 4 caracteres."; // Mensaje de error
        comprobarApellidos = false;
    } else {
        apellidosUsuarioInput.style.color = "green"; // Si es valido se cambia el color a verde
        mensajeError.textContent = ""; // Elimino el mensaje de error
        comprobarApellidos = true;
    }
});

// El evento de click sigue existiendo para cuando el usuario haga clic en "registrarse"
enlaceRegistro.addEventListener("click", function() {
    const correoUsuarioGuardado = correoUsuarioInput.value.trim();
    const constraseniaUsuarioGuardado = constraseniaUsuarioInput.value.trim();
    const nombreUsuarioGuardado = nombreUsuarioInput.value.trim();
    const apellidosUsuarioGuardado = apellidosUsuarioInput.value.trim();

    // Validación para asegurarnos de que el correo es válido antes de guardar los datos

    // Si todo está bien, podemos guardar los datos
    if (comprobarCorreo && comprobarContrasenia && comprobarNombre && comprobarApellidos) {
        localStorage.setItem("correoUsuario", correoUsuarioGuardado);
        localStorage.setItem("constraseniaUsuario", constraseniaUsuarioGuardado);
        localStorage.setItem("nombreUsuario", nombreUsuarioGuardado);
        localStorage.setItem("apellidosUsuario", apellidosUsuarioGuardado);
    }

    // Resto del código para mostrar el mensaje de exito o error
    let mensajeAnterior = document.querySelector(".mensaje_iniciar_sesion");
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "mensaje_iniciar_sesion";

    if (comprobarCorreo && comprobarContrasenia && comprobarNombre && comprobarApellidos) {
        nuevoDiv.textContent = "¡Gracias por registrarte! Te mantendremos informado sobre las próximas celebraciones.";
    } else {
        nuevoDiv.textContent = "¡Ha habido un error! Alguno de los parámetros anteriores está vacío o presenta un fallo.";
    }

    enlaceRegistro.insertAdjacentElement('afterend', nuevoDiv);

    console.log(correoUsuarioGuardado);
    console.log(constraseniaUsuarioGuardado);
    console.log(nombreUsuarioGuardado);
    console.log(apellidosUsuarioGuardado);
});
