// Elimino el primer hotel y añado un hotel nuevo

// Cojo el contenedor de los hoteles
const contenedorHoteles = document.querySelector(".carnavaleros_destacados");
const nombreHotelInput = document.querySelector(".Introducir_hotel");
const urlHotelInput = document.querySelector(".Introducir_url");

// Borro el primer hotel
const borrarHotel = document.querySelector(".eliminar_hotel");
borrarHotel.addEventListener("click", function() {
    contenedorHoteles.removeChild(contenedorHoteles.firstElementChild);
});

const agregarHotel = document.querySelector(".añadir_hotel");
agregarHotel.addEventListener("click", function() {
    // Cojo los valores de los inputs
    const nombreHotel = nombreHotelInput.value.trim();  // Nombre del hotel
    const urlHotel = urlHotelInput.value.trim();        // URL de la imagen

    // Veriico que ambos campos no estén vacíos
    if (nombreHotel && urlHotel) {
        // Creo un nuevo artículo para el cuarto hotel
        const nuevoHotel = document.createElement("article");
        nuevoHotel.classList.add("carnavaleros_destacados");

        // Creo el contenedor de la imagen y el texto del hotel
        const divContenedor = document.createElement("div");
        divContenedor.classList.add("img_info_carnavaleros");

        // Creo la imagen del hotel
        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = urlHotel;  // Asignamos la URL de la imagen
        nuevaImagen.alt = `Imagen de ${nombreHotel}`;  // Descripción de la imagen

        // Establezco el tamaño de la imagen
        nuevaImagen.height = 768;
        nuevaImagen.style.width = 100 + "%";

        // Creo un contenedor para el nombre del hotel con la clase "nombre_hotel_3"
        const nombreDiv = document.createElement("div");
        nombreDiv.classList.add("nombre_hotel_3");  // Cambié aquí la clase a "nombre_hotel_3"
        nombreDiv.textContent = nombreHotel;  // Asignamos el nombre del hotel

        // Agrego la imagen y el nombre del hotel al div contenedor
        divContenedor.appendChild(nuevaImagen);
        divContenedor.appendChild(nombreDiv);

        // Agrego el div contenedor al nuevo artículo
        nuevoHotel.appendChild(divContenedor);

        // Agrego el nuevo hotel al final del contenedor de hoteles
        contenedorHoteles.appendChild(nuevoHotel);

        // Limpio los inputs después de agregar el hotel
        nombreHotelInput.value = "";
        urlHotelInput.value = "";
    } else {
        alert("Algún campo esta vacío.");
    }
});
