require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/products');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

const PORT = process.env.APP_PORT;  // si se puedieran agregar variables harcoded agregaría un fallback por si el puerto está usado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});