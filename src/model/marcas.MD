## Esquema de Marca para Mongoose (archivo README.md en español)

Este archivo `README.md` describe un archivo JavaScript que define un esquema de Mongoose para representar un modelo de "Marca" en una base de datos MongoDB.

**Características:**

- Importa Mongoose para la interacción con la base de datos MongoDB.
- Define un esquema para el modelo "Marca" utilizando `mongoose.Schema`.
- El esquema define las propiedades de una marca:
    - `id`: Cadena de texto (obligatorio)
    - `detalle`: Cadena de texto (obligatorio, elimina espacios en blanco al inicio y final)
    - `estado`: Número (obligatorio, elimina espacios en blanco al inicio y final)
- Activa la opción `timestamps` para agregar automáticamente marcas de tiempo de creación y actualización a los documentos.
- Crea un modelo de Mongoose llamado `marca` basado en el esquema y lo exporta para su uso en la aplicación.

**Dependencias:**

- Este archivo depende de Mongoose, una librería de modelado de objetos para MongoDB. Asegúrate de tenerla instalada en tu proyecto.

**Uso:**

1. **Importa el modelo en tu código:** En los archivos de tu aplicación que necesiten interactuar con marcas, importa el modelo utilizando la siguiente sintaxis:

```javascript
import { marca } from './ruta_marca.js'; // Ejemplo asumiendo que el archivo se llama ruta_marca.js

// Ejemplo de uso para crear una nueva marca
const nuevaMarca = new marca({
  id: 'ABC123',
  detalle: 'Marca de Zapatos',
  estado: 1,
});

nuevaMarca.save()
  .then((marcaGuardada) => {
    console.log('Marca creada con éxito:', marcaGuardada);
  })
  .catch((error) => {
    console.error('Error al crear la marca:', error);
  });
```

2. **Consulta la documentación de Mongoose:** Para conocer todas las funcionalidades disponibles para trabajar con modelos de Mongoose, consulta la documentación oficial: [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)

**Licencia:**

(Especifica la licencia bajo la cual se distribuye el código, por ejemplo, Licencia MIT)

**Contacto:**

(Proporciona detalles de contacto o enlaces para que los usuarios puedan solicitar soporte o realizar consultas)
