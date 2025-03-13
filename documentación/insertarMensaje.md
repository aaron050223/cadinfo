# **Documentación sobre el uso de `insertAdjacentHTML` en la inserción de elementos**

## **1. Descripción del código**

El código selecciona un enlace con la clase `registrarse` y, justo después de ese enlace, agrega un mensaje de agradecimiento por el registro.

Esto se hace usando `insertAdjacentHTML`, que es una alternativa a `innerHTML`, pero con más control sobre dónde se coloca el nuevo contenido.

---

## **2. Explicación paso a paso**

### **Selección del elemento**

```jsx
const enlaceRegistro = document.querySelector(".registrarse");
```

Aquí se está obteniendo el primer elemento que tenga la clase `.registrarse`. Este será el punto de referencia donde se insertará el mensaje de confirmación.

### **Inserción del mensaje con `insertAdjacentHTML`**

```jsx
enlaceRegistro.insertAdjacentHTML('afterend',
    `<div class="secciones_hoteles">
        ¡Gracias por registrarte! Te mantendremos informado sobre las próximas celebraciones.
    </div>`
);
```

Esta línea añade un `div` con la clase `secciones_hoteles` justo **después** del enlace de registro.

En lugar de usar `innerHTML`, se usa `insertAdjacentHTML`, porque permite mayor control sobre la ubicación del nuevo contenido. Según la documentación, esta función permite insertar HTML en cuatro posiciones diferentes:

- `beforebegin`: antes del elemento seleccionado.
- `afterbegin`: dentro del elemento, al principio.
- `beforeend`: dentro del elemento, al final.
- `afterend`: justo después del elemento.

En este caso, **se ha optado por `afterend` porque es más cómodo**, ya que coloca el mensaje justo después del enlace sin necesidad de modificar su contenido ni envolverlo en otro contenedor.