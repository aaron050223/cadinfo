# **Documentación de “Cambiar color”**

### **Descripción**

Este código selecciona todos los elementos que tienen la clase `.secciones_hoteles` y realiza dos acciones en ellos:

1. **Quita la clase `-primario`.**
2. **Cambia el color del texto a `#DEB841` (amarillo).**

El código usa un doble bucle `forEach()` para recorrer los elementos varias veces.

---

## **Explicación del Código**

### **1. Selección de elementos**

```jsx
let elementos = document.querySelectorAll(".secciones_hoteles");
```

- Usa `document.querySelectorAll(".secciones_hoteles")` para seleccionar todos los elementos con la clase `secciones_hoteles`.
- Guarda los elementos en una variable llamada `elementos`, que es una `NodeList` (una lista de nodos del DOM).

---

### **2. Primer bucle `forEach()`**

```jsx
elementos.forEach(elemento => {
```

- Usa `forEach()` para recorrer cada uno de los elementos de la lista `elementos`.
- `elemento` representa cada uno de los elementos seleccionados.

---

### **3. Segundo bucle `forEach()` dentro del primero**

```jsx
    elementos.forEach(elemento => {
```

- **Vuelve a recorrer todos los elementos dentro del primer bucle.**
- Esto significa que por cada elemento del primer bucle, se ejecuta otro bucle que recorre todos los elementos otra vez.
- Cada vez que pasa por un elemento, vuelve a hacer los mismos cambios en todos los demás.

---

### **4. Eliminación de la clase `-primario`**

```jsx
        elemento.classList.remove("--primario");
```

- Usa `classList.remove("--primario")` para eliminar la clase `-primario` de cada elemento.
- Si el elemento no tiene esa clase, no pasa nada.

---

### **5. Cambio de color del texto**

```jsx
        elemento.style.color = "#DEB841";
```

- Usa `style.color = "#DEB841"` para cambiar el color del texto de cada elemento a amarillo (`#DEB841`).
- Se aplica directamente a través de `style`, lo que modifica el CSS de ese elemento en el DOM.

---

## **Resumen del funcionamiento**

1. Se seleccionan todos los elementos con la clase `.secciones_hoteles`.
2. Se recorre cada uno de ellos con un `forEach()`.
3. Dentro de este recorrido, se vuelve a recorrer **todos los elementos de nuevo** con otro `forEach()`.
4. A cada elemento en el segundo `forEach()`:
    - Se le quita la clase `-primario`.
    - Se le cambia el color del texto a amarillo.

---

## **Comportamiento esperado**

- **Todos los elementos** con la clase `.secciones_hoteles` perderán la clase `-primario`, si la tenían.
- **Todos los elementos** con la clase `.secciones_hoteles` tendrán su texto en color amarillo (`#DEB841`).

El resultado visual será que todos los textos en los elementos con `.secciones_hoteles` cambiarán de color y ya no tendrán la clase `--primario`.