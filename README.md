# Job Simulator — REST CRUD API

## Descripción

API REST con operaciones CRUD completas sobre un catálogo de productos, con persistencia en PostgreSQL y entorno containerizado con Docker.

---

## Levantar el sistema

```bash
docker compose up --build
```

El sistema completo (base de datos, API y frontend) levanta con ese único comando.

- Frontend: http://localhost:8080
- API: http://localhost:3000

---

## Stack

- **Lenguaje:** Javascript (Node.js)
- **Framework:** Express
- **Base de datos:** PostgreSQL
- **Containerización:** Docker + Docker Compose

---

## Nivel entregado

**Nivel 3 — Senior** con ambos bonus completados.

---

## Recurso: productos

| Campo      | Tipo    | Restricciones              |
| ---------- | ------- | -------------------------- |
| id         | integer | primary key, autoincrement |
| nombre     | string  | requerido                  |
| descripcion| string  | requerido                  |
| categoria  | string  | requerido                  |
| stock      | integer | requerido                  |
| precio     | float   | requerido                  |
| disponible | boolean | requerido                  |

---

## Endpoints

| Método | Ruta             | Descripción                        |
| ------ | ---------------- | ---------------------------------- |
| GET    | /products        | Obtener todos los productos        |
| GET    | /products/:id    | Obtener un producto por ID         |
| POST   | /products        | Crear un nuevo producto            |
| PUT    | /products/:id    | Actualizar un producto completo    |
| PATCH  | /products/:id    | Actualizar campos parciales        |
| DELETE | /products/:id    | Eliminar un producto               |

---

## Estructura del proyecto

```
backend/
  server.js               # punto de entrada
  src/
    config/db.js          # conexion a PostgreSQL
    models/product.js     # queries SQL
    controllers/productController.js
    routes/products.js
  db/
    init.sql              # esquema inicial, ejecutado automaticamente por Docker
frontend/
  public/                 # HTML, JS estatico
.env.example              # variables de entorno documentadas sin valores reales
docker-compose.yml
```

---

## Variables de entorno

Copiar `.env.example` a `.env` y completar los valores:

```bash
cp .env.example .env
```

| Variable      | Descripcion                        |
| ------------- | ---------------------------------- |
| DB_HOST       | Hostname de PostgreSQL             |
| DB_PORT       | Puerto de PostgreSQL (5432)        |
| DB_NAME       | Nombre de la base de datos         |
| DB_USER       | Usuario de PostgreSQL              |
| DB_PASSWORD   | Contrasena de PostgreSQL           |
| APP_PORT      | Puerto expuesto por la API         |
| FRONTEND_PORT | Puerto expuesto por el frontend    |
