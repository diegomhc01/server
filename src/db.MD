## Conexión a la Base de Datos con Mongoose (en español)

Este archivo `README.md` describe la función `connectionDB` utilizada para establecer la conexión a la base de datos con Mongoose en un proyecto Node.js.

**Función `connectionDB`**

- Esta función asíncrona se encarga de conectar la aplicación a la base de datos MongoDB.
- Utiliza la librería `mongoose` para establecer la conexión.
- La cadena de conexión (`mongodb+srv://...`) específica los detalles de la conexión a tu base de datos MongoDB Atlas (o similar). Debes reemplazarla con tu propia cadena de conexión.

**Proceso de Conexión:**

1. La función intenta conectarse a la base de datos utilizando `mongoose.connect`.
2. Si la conexión es exitosa, se imprime un mensaje a la consola indicando que la base de datos está conectada (`>>>> DB conectada`).
3. En caso de error durante la conexión, se captura el error y se imprime a la consola para propósitos de depuración.

**Uso:**

- Importa esta función en tu archivo principal (generalmente `app.js` o `server.js`) para establecer la conexión a la base de datos antes de iniciar el servidor.
- Asegúrate de reemplazar la cadena de conexión (`mongodb+srv://...`) con la tuya propia.

**Consideraciones:**

- Este código asume que ya tienes configurado un cluster de MongoDB Atlas (o un servicio similar) y has creado la base de datos y la colección que vas a utilizar.
- Recuerda mantener la cadena de conexión segura, evitando guardarla directamente en el código fuente. Puedes utilizar variables de entorno para almacenar la cadena de conexión de forma segura.

**Dependencias:**

- Este código requiere la librería `mongoose` instalada en tu proyecto. Puedes instalarla usando `npm install mongoose` o `yarn add mongoose`.

**Licencia:**

(Especifica la licencia bajo la cual se distribuye el código, por ejemplo, Licencia MIT)

**Contacto:**

(Proporciona detalles de contacto o enlaces para que los usuarios puedan solicitar soporte o realizar consultas)
