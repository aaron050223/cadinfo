# **Documentación sobre la manipulación del contenedor de hoteles**

## **1. Descripción del código**

Este código selecciona un contenedor de hoteles, elimina el primer hotel que aparece en la lista y luego crea un nuevo artículo (`article`) para añadir un hotel al final de la lista.

Se hace todo de manera dinámica utilizando JavaScript, sin necesidad de modificar directamente el HTML.

---

## **2. Explicación paso a paso**

### **Selección del contenedor de hoteles**

```jsx
const contenedorHoteles = document.querySelector(".carnavaleros_destacados");

```

Se selecciona el contenedor principal donde están los hoteles usando `document.querySelector()`. Este contenedor será el que manipularemos.

---

### **Eliminación del primer hotel**

```jsx
contenedorHoteles.removeChild(contenedorHoteles.firstElementChild);

```

Aquí se elimina el primer hotel dentro del contenedor.

- `firstElementChild` selecciona el primer elemento hijo del contenedor.
- `removeChild()` lo elimina completamente del DOM.

Esto se usa cuando queremos eliminar un elemento específico dentro de un contenedor sin afectar al resto.

---

### **Creación del nuevo hotel**

```jsx
const nuevoHotel = document.createElement("article");
nuevoHotel.classList.add("carnavaleros_destacados");
```

Se crea un nuevo `article`, que representará el cuarto hotel. Luego, se le asigna la misma clase que tienen los otros hoteles (`carnavaleros_destacados`) para mantener el mismo estilo.

---

### **Creación del contenedor de imagen y texto**

```jsx
const divContenedor = document.createElement("div");
divContenedor.classList.add("img_info_carnavaleros");
```

Se genera un `div` que actuará como contenedor de la imagen y la información del hotel. Se le añade la clase `img_info_carnavaleros` para aplicar los estilos correspondientes.

---

### **Creación de la imagen del hotel**

```jsx
const nuevaImagen = document.createElement("img");
nuevaImagen.src = "assets/hotel_alquimia1.png";  // Ruta de la nueva imagen del hotel
nuevaImagen.alt = "Nuevo Hotel";
nuevaImagen.classList.add("foto_hotel");
```

Se crea un nuevo elemento `img`, se le asigna la ruta de la imagen (`src`), un texto alternativo (`alt`) y se le añade la clase `foto_hotel` para que tenga el mismo diseño que las demás imágenes de hoteles.

---

### **Creación del nombre del hotel**

```jsx
const nombreHotel = document.createElement("p");
nombreHotel.classList.add("nombre_hotel_4");
nombreHotel.textContent = "Hotel Alquimia | 3 ⭐";
```

Se crea un `p` donde se coloca el nombre del hotel y su calificación en estrellas. También se le asigna la clase `nombre_hotel_4` para aplicarle estilos.

---

### **Agrupando la imagen y el texto dentro del `div` contenedor**

```jsx
divContenedor.appendChild(nuevaImagen);
divContenedor.appendChild(nombreHotel);
```

Aquí se insertan la imagen y el nombre dentro del `div` que los contendrá.

---

### **Añadiendo todo al nuevo hotel**

```jsx
nuevoHotel.appendChild(divContenedor);
```

El `div` que contiene la imagen y el nombre se agrega dentro del `article` (`nuevoHotel`).

---

### **Insertando el nuevo hotel en el contenedor de hoteles**

```jsx
contenedorHoteles.appendChild(nuevoHotel);
```

Por último, el nuevo hotel se añade al final del contenedor de hoteles.