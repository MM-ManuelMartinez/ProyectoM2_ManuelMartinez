# MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones de un MiniBlog.

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- pg
- Supertest
- Node Test Runner
- OpenAPI 3.0.3

## Requisitos

Para ejecutar el proyecto localmente es necesario tener instalado:

- Node.js
- npm
- PostgreSQL

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=miniblog
DB_USER=postgres
DB_PASSWORD=tu_contraseña
```

El archivo `.env` no debe subirse al repositorio.

## Base de datos

Crear una base de datos PostgreSQL llamada:

```text
miniblog
```

Luego ejecutar los scripts SQL incluidos en el proyecto.

Primero:

```text
sql/setup.sql
```

Este archivo crea las tablas `authors` y `posts` y establece la relación entre ellas.

Después:

```text
sql/seed.sql
```

Este archivo carga datos iniciales para probar la API.

La relación implementada es:

```text
authors 1 ─── N posts
```

Cada post pertenece a un autor mediante `author_id`.

## Ejecutar el proyecto

Modo normal:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

El servidor local utiliza:

```text
http://localhost:3000
```

## Endpoints

### Authors

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/authors` | Obtener todos los autores |
| GET | `/authors/:id` | Obtener un autor por ID |
| POST | `/authors` | Crear un autor |
| PUT | `/authors/:id` | Actualizar un autor |
| DELETE | `/authors/:id` | Eliminar un autor |

### Posts

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/posts` | Obtener todos los posts |
| GET | `/posts/:id` | Obtener un post por ID |
| GET | `/posts/author/:authorId` | Obtener los posts de un autor |
| POST | `/posts` | Crear un post |
| PUT | `/posts/:id` | Actualizar un post |
| DELETE | `/posts/:id` | Eliminar un post |

## Códigos HTTP

La API utiliza los siguientes códigos según el resultado de cada operación:

- `200` - Operación exitosa
- `201` - Recurso creado
- `204` - Recurso eliminado correctamente
- `400` - Datos inválidos
- `404` - Recurso no encontrado
- `500` - Error interno del servidor

## Tests

Los tests utilizan Supertest junto con el runner nativo de Node.js.

Ejecutar:

```bash
npm test
```

Los tests verifican endpoints básicos de authors y posts, incluyendo respuestas exitosas, recursos inexistentes y creación de recursos.

## Documentación OpenAPI

La documentación de la API se encuentra en:

```text
openApi.yaml
```

El archivo utiliza OpenAPI 3.0.3 y documenta los endpoints, parámetros, cuerpos de las solicitudes, schemas y respuestas HTTP de la API.

## Deployment

El proyecto está preparado para ser desplegado en Railway.

Las variables de entorno de PostgreSQL deben configurarse en el entorno de producción y las credenciales no deben almacenarse directamente en el repositorio.

https://proyectom2manuelmartinez-production.up.railway.app

## Estructura del proyecto

```text
ProyectoM2_ManuelMartinez/
├── controllers/
├── db/
├── middlewares/
├── routes/
├── services/
├── sql/
│   ├── setup.sql
│   └── seed.sql
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
├── app.js
├── server.js
├── openapi.yaml
├── .env.example
├── package.json
└── README.md
```

## Uso de Inteligencia Artificial

Durante el desarrollo se utilizó asistencia de inteligencia artificial como herramienta de apoyo para aprendizaje, revisión y documentación.

La asistencia incluyó:

- Explicación de la sintaxis CommonJS y uso de `require` y `module.exports`.
- Orientación sobre validaciones y manejo de códigos HTTP.
- Apoyo en el diseño del esquema SQL y relaciones entre tablas.
- Revisión y corrección de consultas parametrizadas con PostgreSQL.
- Orientación para conectar Express con PostgreSQL utilizando `pg`.
- Explicación e implementación guiada del manejo global de errores.
- Orientación para configurar y utilizar Supertest y Node Test Runner.
- Asistencia para hacer repetibles los tests que crean autores.
- Generación de la documentación OpenAPI 3.0.3.
- Generación y estructuración del README.
- Orientación sobre organización del proyecto y mensajes de commits Git.

La implementación del proyecto fue realizada y probada progresivamente, utilizando la IA como herramienta de asistencia durante el proceso.

## Autor

Manuel Martinez