// Elimino el primer hotel y añado un hotel nuevo

// Seleccionamos el contenedor de los hoteles
const contenedorHoteles = document.querySelector(".carnavaleros_destacados");

// Borro el primer hotel
const borrarHotel = document.querySelector(".eliminar_hotel");
borrarHotel.addEventListener("click", function() {
    contenedorHoteles.removeChild(contenedorHoteles.firstElementChild);
});

const agregarHotel = document.querySelector(".añadir_hotel");
agregarHotel.addEventListener("click", function() {
    // Creamos un nuevo artículo para el cuarto hotel
    const nuevoHotel = document.createElement("article");
    nuevoHotel.classList.add("carnavaleros_destacados");

// Creamos el contenedor de la imagen y el texto del hotel
    const divContenedor = document.createElement("div");
    divContenedor.classList.add("img_info_carnavaleros");

// Creamos la imagen del cuarto hotel
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = "assets/hotel_alquimia1.png";  // Ruta de la nueva imagen del hotel
    nuevaImagen.alt = "Nuevo Hotel";
    nuevaImagen.classList.add("foto_hotel");

// Creamos el nombre del cuarto hotel
    const nombreHotel = document.createElement("p");
    nombreHotel.classList.add("nombre_hotel_4");
    nombreHotel.textContent = "Hotel Alquimia | 3 ⭐";

// Agregamos la imagen y el nombre del hotel al div contenedor
    divContenedor.appendChild(nuevaImagen);
    divContenedor.appendChild(nombreHotel);

// Agregamos el div contenedor al nuevo artículo
    nuevoHotel.appendChild(divContenedor);

// Finalmente, agregamos el nuevo hotel al final del contenedor de hoteles
    contenedorHoteles.appendChild(nuevoHotel);
});

