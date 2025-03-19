// Inserta el div con el mensaje

let acceso = 0;

const correoUsuarioInput = document.querySelector(".Introducir_correo_electronico")
const constraseniaUsuarioInput = document.querySelector(".Introducir_contraseña")
const nombreUsuarioInput = document.querySelector(".Introducir_nombre")
const apellidosUsuarioInput = document.querySelector(".Introducir_apellidos")

const enlaceRegistro = document.querySelector(".registrarse"); enlaceRegistro.addEventListener("click", function(event) { // Lo pongo en una linea para que sea más fácil de leer

    // Aqui obtengo los valores de los inputs
    const correoUsuarioGuardado = correoUsuarioInput.value;
    const constraseniaUsuarioGuardado = constraseniaUsuarioInput.value;
    const nombreUsuarioGuardado = nombreUsuarioInput.value;
    const apellidosUsuarioGuardado = apellidosUsuarioInput.value;

    // Aqui guardo los valores de los inputs
    localStorage.setItem("correoUsuario", correoUsuarioGuardado);
    localStorage.setItem("constraseniaUsuario", constraseniaUsuarioGuardado);
    localStorage.setItem("nombreUsuario", nombreUsuarioGuardado);
    localStorage.setItem("apellidosUsuario", apellidosUsuarioGuardado);

    // Aqui creo el mensaje que se insertará
    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "secciones_hoteles";
    nuevoDiv.textContent = "¡Gracias por registrarte! Te mantendremos informado sobre las próximas celebraciones.";

    // Inserto el mensaje
    enlaceRegistro.insertAdjacentElement('afterend', nuevoDiv);

    acceso = acceso + 1;
    console.log(correoUsuarioGuardado);
});