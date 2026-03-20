-- productos

CREATE TABLE IF NOT EXISTS productos (
  id          SERIAL PRIMARY KEY,
  nombre      VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  categoria   VARCHAR(255) NOT NULL,
  stock       INTEGER      NOT NULL,
  precio      NUMERIC      NOT NULL,
  disponible  BOOLEAN      NOT NULL
);
