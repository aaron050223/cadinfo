# Proyecto: Página Web - cadinfo

Este proyecto consiste en una página web dedicada a ofrecer información sobre la ciudad de  **Cádiz**, su cultura, personajes ilustres y más. La página cuenta con un diseño moderno, funcional y totalmente **responsivo**, adaptándose tanto a pantallas grandes (como las de escritorio) como a dispositivos móviles.

## Tecnologías Utilizadas
- **HTML**: Estructura básica de la página web.
- **CSS**: Estilos visuales y diseño responsivo.
- **Flexbox**: Para la disposición flexible de los elementos.
- **Media Queries**: Para adaptar el diseño a diferentes tamaños de pantalla.

## Estructura del Proyecto

- **.html**:  Define la estructura y el contenido de la página web utilizando etiquetas HTML.
- **.css**: Controla la apariencia y el diseño visual de la página web, aplicando estilos a los elementos HTML.
- **assets**: Almacena recursos estáticos como imágenes, fuentes y otros archivos necesarios para el funcionamiento y diseño del sitio web.


## Descripción General

Este proyecto contiene diferentes secciones que cubren la rica tradición y cultura de la ciudad más **antigua** de occidente, ademas de otros aspectos relevantes. A continuación se describen las secciones principales:

### 1. **Header (Encabezado)**
El encabezado de la página incluye:
- Un **logo** que redirige al inicio.
- Un menú de navegación con enlaces a diferentes secciones del sitio, tales como **Inicio**, **Carnaval**, **Entierro de la caballa**, **Hoteles** e **Iniciar sesión**. Este menú es **responsivo**, adaptándose a dispositivos móviles con un menú hamburguesa.

**Clases clave:**
- `.header`: Contenedor principal del encabezado.
- `.imagen_logo_inicio`: Logo que se adapta en tamaño según el dispositivo.
- `.pestañas_inicio`: Contenedor de los enlaces del menú de navegación.
- `.menu-hamburguesa-header`: Implementación del menú hamburguesa para pantallas pequeñas.

### 2. **Sección de Inicio**
Esta es la página principal que presenta:
- **Imágenes destacadas** sobre de Cádiz.
- Un **título principal** que invita a conocer más sobre la tacita de plata.
- **Secciones** con texto descriptivo sobre el carnaval, sus personajes y agrupaciones.

**Clases clave:**
- `.imagen_grande_inicio`: Imagen principal de la página de inicio.
- `.titulo_inicio`: Título principal de la página.
- `.secciones`: Texto que describe diversas características del carnaval y su historia.
- `.imagenes_pequeñas_inicio`: Imágenes que ilustran el contenido y se organizan en una cuadrícula.

### 3. **Sección del Carnaval y Entierro de la Caballa**
Esta sección está dedicada a mostrar:
- Información sobre las **agrupaciones carnavaleras**.
- **Imágenes y descripciones** de las agrupaciones y fiestas  más representativas.
- **Información adicional** sobre los eventos, concursos y tradiciones de Cádiz.

**Clases clave:**
- `.carnaval_inicio`: Estilo para la sección del carnaval, que incluye imágenes y textos.
- `.poster_info`: Contenido relacionado con el carnaval y sus eventos.
- `.titulo_carnaval`: Título que introduce el carnaval.
- `.informacion_carnaval`: Descripción general de las agrupaciones, sus tradiciones y concursos.

### 4. **Personajes Ilustres**
Una sección que resalta a las figuras más importantes en la historia de la ciudad. Esta sección presenta tanto **texto descriptivo** como **imágenes** de estos personajes destacados.

**Clases clave:**
- `.personajes_ilustres`: Contenedor para mostrar los personajes ilustres del carnaval o de la propia ciudad.
- `.personas_cadiz_inicio`: Sección que contiene las imágenes de los personajes.

### 5. **Agrupaciones**
Esta sección tiene información sobre las **agrupaciones carnavaleras** más famosas, con imágenes y descripciones de cada una. También se presenta un listado de las **agrupaciones por tipo**.

**Clases clave:**
- `.imagenes_pequeñas_inicio_fiestas`: Imágenes de agrupaciones y fiestas.
- `.nombre_fiestas`: Títulos con el nombre de cada agrupación.
- `.carnavaleros_destacados`: Contenedor para mostrar a los carnavaleros más destacados.

### 6. **Hoteles y Localizaciones**
El sitio incluye una sección con información sobre los **hoteles** cercanos y otras **localizaciones** relevantes para los visitantes de Cádiz.

**Clases clave:**
- `.secciones_hoteles`: Descripción de los hoteles recomendados.
- `.foto_hotel`: Estilo para las imágenes de los hoteles.
- `.informacion_localizaciones`: Descripción de las localizaciones de interés.

### 7. **Formulario de Inicio de Sesión**
Un formulario donde los usuarios pueden ingresar su **correo electrónico** y **contraseña** para acceder a contenido exclusivo.

**Clases clave:**
- `.Introducir_correo_electronico`: Campo de correo electrónico.
- `.Introducir_contraseña`: Campo de contraseña.
- `.Iniciar_sesion_2`: Enlace para iniciar sesión.

### 8. **Footer (Pie de Página)**
El pie de página incluye enlaces a secciones como:
- **Política de privacidad**.
- **Términos y condiciones**.
- **Información de contacto**.

**Clases clave:**
- `.footer`: Contenedor principal del pie de página.
- `.footer-enlaces`: Enlaces importantes en el pie de página.
- `.terminos`: Sección de los términos y condiciones.

## Estilos y Funcionalidades

El diseño utiliza principalmente **Flexbox** para distribuir los elementos de manera flexible. Además, se incluyen **transiciones** y **efectos hover** para mejorar la interacción del usuario con las imágenes y enlaces.

### Funcionalidades
- **Responsividad**: El sitio es completamente adaptativo a diferentes tamaños de pantalla, utilizando **media queries** para asegurar una visualización óptima en todos los dispositivos.
- **Interacción**: Se incluyen efectos como el **zoom** al pasar el cursor sobre las imágenes y cambios de color en los enlaces al hacer hover.
- **Menú Hamburguesa**: En pantallas pequeñas, el menú de navegación se convierte en un menú hamburguesa que se puede abrir o cerrar con un clic.

### Media Queries
- Para pantallas de **escritorio** y **tabletas**, se utilizan estilos de **flexbox** para organizar el contenido de manera eficiente.
- En dispositivos **móviles**, los elementos se reorganizan para facilitar la navegación y el acceso al contenido.

## ¿Como se ve la web?
A continuación, algunos  de cómo se ve el sitio en diferentes dispositivos:

### En escritorio:
![Desktop View](assets/Captura%20de%20pantalla%202025-01-28%20a%20las%2021.25.42.png)

### En móvil:
![Mobile View](assets/Captura%20de%20pantalla%202025-01-28%20a%20las%2021.26.04.png)

### **W3C VALIDATOR**

A continuación, mostrare un ejemplo de la correccion que me ha hecho el W3C. El fallo se encontraba en uso incorrecto de un `section`, donde me recomendaba cambiarlo por un `div`.
- Aqui se ve como me muestra el fallo:
![Desktop View](assets/Captura%20de%20pantalla%202025-01-28%20a%20las%2021.52.05.png)
- Y aqui se muestra que queda corregido:
  ![Desktop View](assets/Captura%20de%20pantalla%202025-01-28%20a%20las%2021.52.27.png)
