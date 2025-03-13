# **Lenguajes de Script y ECMAScript**

## **1. ¿Qué es un lenguaje de script?**

Un lenguaje de script es un tipo de lenguaje de programación que se usa para automatizar tareas, controlar aplicaciones y hacer el desarrollo más rápido sin necesidad de compilar el código antes de ejecutarlo.

Lo que los hace especiales es que son interpretados, lo que significa que el código se ejecuta directamente sin tener que convertirse en un archivo binario antes, como pasa con lenguajes compilados (ejemplo: C o Java).

Algunas de sus características clave son:

- No necesitan compilación, se ejecutan directamente.
- Son flexibles y fáciles de aprender.
- Se usan mucho en desarrollo web, automatización de procesos y manipulación de datos.

---

## **2. Tipos de lenguajes de script**

Los lenguajes de script se pueden clasificar según dónde se ejecutan y su estilo de programación.

### **Por dónde se ejecutan**

1. **En el navegador (lado del cliente):** Son los que corren dentro de una página web. El ejemplo más famoso es JavaScript. Sirven para hacer cosas interactivas como animaciones, validaciones de formularios o manipulación del contenido de la página.
2. **En el servidor (backend):** Se ejecutan en un servidor para manejar bases de datos, procesar información y generar contenido dinámico. Aquí encontramos PHP, Python (con frameworks como Django o Flask), Node.js (que en realidad es JavaScript corriendo en el servidor) y Ruby.
3. **Embebidos en programas o sistemas operativos:** Son lenguajes que se usan dentro de otras aplicaciones para personalizarlas o automatizar tareas. Por ejemplo, Lua es muy usado en videojuegos, y Bash se usa para hacer scripts en sistemas operativos como Linux.

### **Por su estilo de programación**

1. Algunos son más **imperativos**, es decir, siguen una serie de pasos de forma secuencial (como Bash).
2. Otros son **orientados a objetos**, lo que significa que organizan la lógica del código en "objetos" (como JavaScript y Python).
3. También hay lenguajes más **funcionales**, que evitan cambiar valores y trabajan con funciones matemáticas (JavaScript tiene algunas características de este tipo).

---

## **3. ECMAScript y sus versiones más importantes**

JavaScript, aunque es el lenguaje más popular para la web, sigue un estándar llamado **ECMAScript**, que define sus reglas y características.

Este estándar fue creado para que todos los navegadores y entornos que usan JavaScript tengan una versión unificada del lenguaje. Con el tiempo, ECMAScript ha ido evolucionando, agregando nuevas funcionalidades y mejorando su rendimiento.

Algunas versiones importantes de ECMAScript son:

- **ES3 (1999):** Fue una de las primeras versiones estables y trajo soporte para excepciones (try/catch).
- **ES5 (2009):** Añadió mejoras en el manejo de arrays, JSON nativo y el famoso `"use strict"` para mejorar la seguridad del código.
- **ES6 (2015):** Revolucionó JavaScript con nuevas palabras clave como `let` y `const`, funciones flecha (`=>`), clases, `Promise`, `Map` y `Set`, además de los módulos `import/export`.
- **ES7 a ES11 (2016-2020):** Introdujeron mejoras graduales como `async/await`, el operador `??` (para valores nulos o indefinidos) y la opción de encadenamiento opcional con `?.`.

Desde ES6, ECMAScript se actualiza cada año, agregando nuevas funcionalidades poco a poco en lugar de hacer grandes cambios de golpe.

---

## **4. Comparación entre algunos lenguajes de script**

Cuando hablamos de lenguajes de script, JavaScript es el más conocido, pero hay otros que cumplen funciones similares, como TypeScript o PHP.

JavaScript es el estándar para desarrollo web en el frontend (lo que ves en una página), pero también se usa en el backend con Node.js. Es un lenguaje dinámico y flexible, lo que lo hace muy versátil.

TypeScript es una versión mejorada de JavaScript que agrega **tipado estático**. Esto significa que puedes especificar qué tipo de datos va a tener cada variable, lo que ayuda a evitar errores en proyectos grandes. Como ventaja, permite trabajar con código más estructurado, pero requiere un paso de compilación antes de ejecutarse en el navegador.

PHP es un lenguaje diseñado específicamente para el backend. Se usa en muchas páginas web y servidores porque facilita la comunicación con bases de datos. Aunque no sigue el estándar ECMAScript, es un lenguaje de script muy usado en la web.

Python, por otro lado, es un lenguaje de propósito general, pero también es interpretado y fácil de usar. Se emplea en desarrollo web, automatización, inteligencia artificial y análisis de datos. No sigue ECMAScript, pero es muy popular por su simplicidad.

---

## **5. Ejemplos y referencias**

Para entender mejor las diferencias, aquí hay algunos ejemplos de código.

### **Ejemplo 1: Diferencia entre JavaScript y TypeScript**

En JavaScript, puedes hacer lo siguiente:

```jsx
function suma(a, b) {
    return a + b;
}
console.log(suma(5, "10")); // Devuelve "510" (concatena en lugar de sumar)

```

El problema es que JavaScript no te avisa si pasas un número o un texto.

En TypeScript, en cambio, puedes definir el tipo de los parámetros:

```tsx
function suma(a: number, b: number): number {
    return a + b;
}
console.log(suma(5, "10")); // Error: TypeScript no permite sumar un número con un string

```

Esto evita errores y hace que el código sea más seguro.

### **Ejemplo 2: Uso de ECMAScript moderno (ES6)**

Antes de ES6, las variables se declaraban con `var`, lo que podía generar problemas. Ahora se usa `let` y `const`:

```jsx
let nombre = "Juan";
const edad = 30;

nombre = "Carlos"; // Correcto
edad = 31; // Error: No se puede cambiar el valor de una constante

```

Con esto, se mejora la seguridad del código y se evitan errores de variables modificadas accidentalmente.