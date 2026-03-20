require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.APP_PORT;  // si se puedieran agregar variables harcoded agregaría un fallback por si el puerto está usado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});