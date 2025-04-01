let acceso = 0;

// Aquí voy a crear unas variables booleanas para comprobar que todos los valores estén introducidos
let comprobarCorreo = false;
let comprobarContrasenia = false;
let comprobarNombre = false;
let comprobarApellidos = false;

if (acceso === 0) {
    const correoUsuarioInput = document.querySelector(".Introducir_correo_electronico");
    const constraseniaUsuarioInput = document.querySelector(".Introducir_contraseña");
    const nombreUsuarioInput = document.querySelector(".Introducir_nombre");
    const apellidosUsuarioInput = document.querySelector(".Introducir_apellidos");

    const enlaceRegistro = document.querySelector(".registrarse");

    enlaceRegistro.addEventListener("click", function(event) {
        // Prevenir el comportamiento predeterminado (si es un formulario)
        event.preventDefault();

        // Aquí obtengo los valores de los inputs
        const correoUsuarioGuardado = correoUsuarioInput.value.trim(); // Con el trim elimino los espacios vacios
        const constraseniaUsuarioGuardado = constraseniaUsuarioInput.value.trim();
        const nombreUsuarioGuardado = nombreUsuarioInput.value.trim();
        const apellidosUsuarioGuardado = apellidosUsuarioInput.value.trim();

        // Compruebo si los campos están vacíos y actualizo las variables booleanas
        comprobarCorreo = correoUsuarioGuardado !== "";
        comprobarContrasenia = constraseniaUsuarioGuardado !== "";
        comprobarNombre = nombreUsuarioGuardado !== "";
        comprobarApellidos = apellidosUsuarioGuardado !== "";

        // Aquí guardo los valores de los inputs en el localStorage
        if (comprobarCorreo && comprobarContrasenia && comprobarNombre && comprobarApellidos) {
            localStorage.setItem("correoUsuario", correoUsuarioGuardado);
            localStorage.setItem("constraseniaUsuario", constraseniaUsuarioGuardado);
            localStorage.setItem("nombreUsuario", nombreUsuarioGuardado);
            localStorage.setItem("apellidosUsuario", apellidosUsuarioGuardado);
        }

        // Aquí verifico si antes se intento iniciar sesion. Si es asi, se eliminara el mensaje anterior
        const mensajeAnterior = document.querySelector(".secciones_hoteles");
        if (mensajeAnterior) {
            mensajeAnterior.remove(); // Elimina el mensaje previo
        }

        // Aquí creo el mensaje que se mostrará
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "secciones_hoteles";

        // Verifico si todos los campos están completos
        if (comprobarCorreo && comprobarContrasenia && comprobarNombre && comprobarApellidos) {
            nuevoDiv.textContent = "¡Gracias por registrarte! Te mantendremos informado sobre las próximas celebraciones.";
        } else {
            nuevoDiv.textContent = "¡Ha habido un error! Alguno de los parámetros anteriores está vacío.";
        }

        // Inserto el mensaje después del botón
        enlaceRegistro.insertAdjacentElement('afterend', nuevoDiv);

        acceso = 1; // Evita que se registre más de una vez

        console.log(correoUsuarioGuardado);
        console.log(constraseniaUsuarioGuardado);
        console.log(nombreUsuarioGuardado);
        console.log(apellidosUsuarioGuardado);
    });
}
