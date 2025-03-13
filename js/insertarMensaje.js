// Inserta el div con el mensaje después del enlace utilizando innerHTML

const enlaceRegistro = document.querySelector(".registrarse");
enlaceRegistro.insertAdjacentHTML('afterend',
    `<div class="secciones_hoteles">
¡Gracias por registrarte! Te mantendremos informado sobre las próximas celebraciones.
</div>`);
