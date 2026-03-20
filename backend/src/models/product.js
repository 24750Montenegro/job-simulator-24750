const pool = require('../config/db');

async function getAll() {
  const { rows } = await pool.query('SELECT * FROM productos');
  return rows;
}

async function getById(id) {
  const { rows } = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
  return rows[0];
}

async function create(data) {
  const { nombre, descripcion, categoria, stock, precio, disponible } = data;
  const { rows } = await pool.query(
    'INSERT INTO productos (nombre, descripcion, categoria, stock, precio, disponible) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [nombre, descripcion, categoria, stock, precio, disponible]
  );
  return rows[0];
}

async function update(id, data) {
  const { nombre, descripcion, categoria, stock, precio, disponible } = data;
  const { rows } = await pool.query(
    'UPDATE productos SET nombre=$1, descripcion=$2, categoria=$3, stock=$4, precio=$5, disponible=$6 WHERE id=$7 RETURNING *',
    [nombre, descripcion, categoria, stock, precio, disponible, id]
  );
  return rows[0];
}

async function patch(id, data) {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const set = fields.map((f, i) => `${f}=$${i + 1}`).join(', ');
  const { rows } = await pool.query(
    `UPDATE productos SET ${set} WHERE id=$${fields.length + 1} RETURNING *`,
    [...values, id]
  );
  return rows[0];
}

async function remove(id) {
  const { rowCount } = await pool.query('DELETE FROM productos WHERE id = $1', [id]);
  return rowCount;
}

module.exports = { getAll, getById, create, update, patch, remove };
