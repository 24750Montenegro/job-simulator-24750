const model = require('../models/product');


//obtener todos los productos
async function getAll(req, res) {
  try {
    const products = await model.getAll();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
}


//producto por id
async function getById(req, res) {
  try {
    const product = await model.getById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
}

//crear nuevo producto
async function create(req, res) {
  const { nombre, descripcion, categoria, stock, precio, disponible } = req.body;

  if (nombre === undefined || descripcion === undefined || categoria === undefined ||
      stock === undefined || precio === undefined || disponible === undefined) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  if (typeof nombre !== 'string' || typeof descripcion !== 'string' || typeof categoria !== 'string') {
    return res.status(400).json({ error: 'nombre, descripcion y categoria deben ser strings' });
  }

  if (!Number.isInteger(stock)) {
    return res.status(400).json({ error: 'stock debe ser un entero' });
  }

  if (typeof precio !== 'number') {
    return res.status(400).json({ error: 'precio debe ser un número' });
  }

  if (typeof disponible !== 'boolean') {
    return res.status(400).json({ error: 'disponible debe ser un booleano' });
  }

  try {
    const product = await model.create({ nombre, descripcion, categoria, stock, precio, disponible });
    res.status(201).json(product);
  } catch (e) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
}


//actualizar producto completo
async function update(req, res) {
  const { nombre, descripcion, categoria, stock, precio, disponible } = req.body;

  if (nombre === undefined || descripcion === undefined || categoria === undefined ||
      stock === undefined || precio === undefined || disponible === undefined) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  if (typeof nombre !== 'string' || typeof descripcion !== 'string' || typeof categoria !== 'string') {
    return res.status(400).json({ error: 'nombre, descripcion y categoria deben ser strings' });
  }

  if (!Number.isInteger(stock)) {
    return res.status(400).json({ error: 'stock debe ser un entero' });
  }

  if (typeof precio !== 'number') {
    return res.status(400).json({ error: 'precio debe ser un número' });
  }

  if (typeof disponible !== 'boolean') {
    return res.status(400).json({ error: 'disponible debe ser un booleano' });
  }

  try {
    const product = await model.update(req.params.id, { nombre, descripcion, categoria, stock, precio, disponible });
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}


//actualizar producto parcialmente
async function patch(req, res) {
  const allowed = ['nombre', 'descripcion', 'categoria', 'stock', 'precio', 'disponible'];
  const data = {};

  for (const key of allowed) {
    if (req.body[key] !== undefined) data[key] = req.body[key];
  }

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'Se requiere al menos un campo para actualizar' });
  }

  try {
    const product = await model.patch(req.params.id, data);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
}

//eliminar producto
async function remove(req, res) {
  try {
    const rowCount = await model.remove(req.params.id);
    if (!rowCount) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
}


//devolver funciones para ser usadas en rutas
module.exports = { getAll, getById, create, update, patch, remove };
