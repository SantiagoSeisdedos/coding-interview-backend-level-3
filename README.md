# Bienvenido al coding-interview-backend-level-3

## Descripción

Este proyecto es una API REST que permite realizar operaciones CRUD sobre una entidad de tipo `Item`.

La entidad tiene 3 campos: `id`, `name` y `price`.

Tu tarea es completar la implementación de toda la funcionalidad de forma tal de que los tests e2e pasen exitosamente.

### Que puedes hacer:

- ✅ Modificar el código fuente y agregar nuevas clases, métodos, campos, etc.
- ✅ Cambiar dependencias, agregar nuevas, etc.
- ✅ Modificar la estructura del proyecto (/src/\*\* es todo tuyo)
- ✅ Elegir una base de datos
- ✅ Elegir un framework web
- ✅ Cambiar la definición del .devContainer

### Que **no** puedes hacer:

- ❌ No puedes modificar el archivo original /e2e/index.test.ts (pero puedes crear otros e2e test si lo deseas)
- ❌ El proyecto debe usar Typescript
- ❌ Estresarte 🤗

## Pasos para comenzar

1. Haz un fork usando este repositorio como template
2. Clona el repositorio en tu máquina
3. Realiza los cambios necesarios para que los tests pasen
4. Sube tus cambios a tu repositorio
5. Avísanos que has terminado
6. ???
7. PROFIT

## Desafío (segunda parte)

Crear un PR en el repositorio de la prueba existente (level-3) con el siguiente cambio:

- Los Items pares se guardan en "Servidor de Base de Datos A"
- Los Items impares se guardan en "Servidor de Base de Datos B".
- Get Item / Get All, tienen que funcionar como si fuese una sola BD.

Puedes usar tipos de BD distintos o iguales. Lo importante es que se guarden en servidores "fisicamente distintos".

### Cualquier duda contactarme a https://www.linkedin.com/in/andreujuan/

---

### Instrucciones:

`npm i`

`npm run test` para correr los tests.

`docker-compose up -d` para levantar las bases de datos en docker.

`npm start` o `npm run dev` para levantar el servidor en caso de querer utilizar postman.

### Comandos útiles para las bases de datos:

`docker-compose up -d` para levantar las bases de datos en docker.

`docker exec -it mongodb_a mongosh` para acceder a la shell de mongo en el contenedor A.

`docker exec -it mongodb_b mongosh` para acceder a la shell de mongo en el contenedor B.

`use items_a` para acceder a la base de datos A.

`use items_b` para acceder a la base de datos B.

`db.items.find()` para ver los items de la base de datos A o B.

`show dbs` para ver las bases de datos disponibles.

### Changelos:

1. Estructura del Proyecto

   - Se agregó una nueva estructura de carpetas bajo src/ siguiendo el patrón de diseño MVC (Model-View-Controller). Esto facilita la organización del código y la separación de responsabilidades.
     Carpetas añadidas:
     * controllers/: para manejar la lógica de los controladores.
     * services/: para la lógica de negocio.
     * routes/: para la definición de rutas.
     * config/: para configuraciones, como bases de datos.
     * mock/: para mocks de datos con faker utilizados en el testing adicional.
     * middlewares/: para middleware como validaciones y manejo de errores con joi.
     * models/: para definir los esquemas de MongoDB.
     * repositories/: para implementar el patrón repositorio y manejar la persistencia de datos.

2. Controladores y Servicios

   - Se crearon los archivos respectivos en cada carpeta para implementar la funcionalidad solicitada.
     - item.controller.ts: controlador para gestionar las operaciones CRUD de la entidad Item.
     - item.service.ts: lógica de negocio relacionada con Item.
     - item.mock.ts: datos mock utilizados en pruebas.

3. Rutas

   - Se implementaron rutas adicionales para manejar las operaciones CRUD de Item y las funcionalidades extra solicitadas.
   - Se añadió un endpoint adicional /items/paginated para simular un paginado de items. Esto permite la recuperación de resultados paginados, usando parámetros como limit, page, y sort.

4. Base de Datos y Testing

   - Se integró Mongoose para conectarse a MongoDB.
   - Para evitar cambios en la base de datos en la nube durante las pruebas, se añadió Mongo Memory Server, permitiendo el testing en una base de datos en memoria.
   - Se creó el archivo setup.ts para configurar el entorno de testing.
   - Se añadieron archivos .env y .env.test al root para gestionar variables de entorno.

5. Dependencias
   - Se añadieron nuevas dependencias:
     - Mongoose: Para conectarse a MongoDB.
     - Mongo Memory Server: Para tests en memoria.
     - Joi: Para validaciones en los middlewares.
     - Faker: Para generar datos falsos en los tests.

6. Implementación del Patrón Repositorio
   - Se agregó una capa de repositorio para abstraer la lógica de acceso a datos.
   - Se crearon repositorios separados para cada base de datos (A y B).
   - Se implementó un repositorio compuesto que maneja la lógica de distribución entre las dos bases de datos.

7. Desafío de Servidores "Físicamente Distintos"
   - Se configuraron dos instancias de MongoDB en contenedores Docker separados.
   - Se implementó la lógica para guardar items pares en el Servidor A e impares en el Servidor B.
   - Se modificó la lógica de recuperación de datos para que funcione de manera transparente, como si fuera una sola base de datos.

8. Mejoras en la Configuración
   - Se actualizó el archivo docker-compose.yml para incluir dos servicios de MongoDB separados.
   - Se modificaron las variables de entorno para soportar la conexión a ambas bases de datos.

9. Documentación Adicional
   - Se agregaron comentarios en el código para explicar la lógica de distribución de datos entre servidores.
   - Se actualizó este README para reflejar los cambios y nuevas funcionalidades.

### Cualquier duda contactarme a https://www.linkedin.com/in/santiago-seisdedos/ o https://linktr.ee/seisdedos
