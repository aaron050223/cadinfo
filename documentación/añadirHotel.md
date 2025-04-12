## ¿Qué hace este script?

### Eliminar el primer hotel
Cuando hagas clic en el botón "Eliminar hotel", automáticamente se borra el primer hotel que aparece en la lista de hoteles.

### Añadir un hotel nuevo
Puedes añadir un hotel completando dos campos:
- **Nombre del hotel**
- **URL de la imagen del hotel**

Una vez rellenados, haces click en el botón "Añadir hotel".  
El nuevo hotel se agregará al final de la lista con:
- La imagen que pusiste.
- El nombre del hotel debajo de la imagen.

Además, si olvidas completar alguno de los campos, el sistema te avisa con una alerta para que no se te pase nada por alto (una alerta porque se me esta complicando poner el mensaje con css sin mover el resto).

## ¿Cómo está estructurado?

- El código coje el contenedor de hoteles y los campos de entrada del formulario.
- Para **eliminar** un hotel, se elimina el primer elemento dentro del contenedor.
- Para **agregar**:
    - Se crea una estructura HTML que tiene un `<article>` con su imagen y el nombre del hotel.
    - La imagen se ajusta automáticamente para que tenga el mismo formato que los demas hoteles: altura de 768px y ancho al 100%.
    - Todo este bloque nuevo se añade al final de la lista de los hoteles que ya habian.
