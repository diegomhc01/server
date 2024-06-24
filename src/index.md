## Servidor API para Gestión de Marcas

Este archivo `README.md` describe un servidor API Node.js para la gestión de marcas, probablemente como parte de una aplicación más grande. El servidor utiliza el framework Express.js y proporciona rutas para manejar datos de marcas.

**Características:**

- Gestiona base de datos en MongoDB 
- CORS habilitado para solicitudes de origen cruzado (potencialmente por razones de seguridad)
- Analiza los cuerpos de las solicitudes entrantes en formatos JSON y datos de formulario codificados por URL

**Instalación:**

1. Clona o descarga este repositorio.
2. Instala las dependencias usando `npm install` (o `yarn install` si usas yarn).

**Conexión a la Base de Datos (Actualmente Deshabilitada):**

El código incluye `connectionDB()` que establece una conexión a la base de datos. 

**Ejecutando el Servidor:**

1. Inicia el servidor usando `node server.js` (asumiendo que el script principal se llama `server.js`).
2. Se puede iniciar el servidor usando `npm run dev` con el fin de que se actualice el sistema ante cualquier cambio en el código
3. El servidor escuchará en el puerto 8080.

**Rutas de la API:**

- Las rutas API específicas y las funcionalidades se definen en el archivo `marca.js`. Consulta ese archivo para obtener detalles sobre cómo interactuar con la API de gestión de marcas.

**Notas Adicionales:**

- Este `README` proporciona una descripción general. Las funcionalidades específicas y los detalles de uso dependen de la implementación en el archivo `marca.js`.
- Considera agregar mecanismos de autenticación y autorización para entornos de producción.

**Licencia:**

(Especifica la licencia bajo la cual se distribuye el proyecto, por ejemplo, Licencia MIT)

**Contacto:**

(Proporciona detalles de contacto o enlaces para que los usuarios puedan solicitar soporte o realizar consultas)
