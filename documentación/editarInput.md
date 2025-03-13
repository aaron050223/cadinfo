# **Documentación sobre la modificación del tipo de input con JavaScript**

## **1. Descripción del código**

Este código espera a que la página termine de cargarse y luego cambia el tipo de un campo de entrada (`input`) con la clase `"Introducir_contraseña"` a `"password"`, asegurando que el texto introducido se oculte como una contraseña.

---

## **2. Explicación paso a paso**

### **Ejecutar el código cuando la página haya cargado**

```jsx
document.addEventListener("DOMContentLoaded", () => {
```

Aquí se usa `DOMContentLoaded`, que es un evento que se dispara cuando el documento HTML se ha cargado por completo, pero antes de que las imágenes y otros recursos terminen de cargar.

Esto es útil para asegurarnos de que el `input` con la clase `"Introducir_contraseña"` ya existe en el DOM antes de intentar modificarlo.

---

### **Modificar el tipo del campo de entrada**

```jsx
document.querySelector(".Introducir_contraseña").type = "password";
```

- `document.querySelector(".Introducir_contraseña")` selecciona el primer elemento que tenga esta clase.
- `.type = "password"` cambia el tipo de `input`, haciendo que el texto introducido se muestre como puntos o asteriscos, protegiendo la información.

---

## **3. ¿Por qué usar `DOMContentLoaded`?**

Si intentáramos modificar el input sin esperar a que la página cargue, podríamos encontrarnos con un error si el elemento aún no existe en el DOM.

Por ejemplo, si escribimos directamente:

```jsx
document.querySelector(".Introducir_contraseña").type = "password";
```

y el script se ejecuta antes de que el navegador haya creado el `input`, obtendríamos un error porque el `querySelector` no encontraría el elemento.