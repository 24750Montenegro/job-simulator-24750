import { create } from "./api.js";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Creando...";

  const data = new FormData(e.target);
  const payload = {
    nombre:      data.get("nombre"),
    descripcion: data.get("descripcion"),
    categoria:   data.get("categoria"),
    stock:       parseInt(data.get("stock"), 10),
    precio:      parseFloat(data.get("precio")),
    disponible:  e.target.disponible.checked,
  };

  try {
    await create(payload);
    window.location.href = "index.html";
  } catch (e) {
    document.getElementById("error").textContent = `Error al crear el registro: ${e.message}`;
    document.getElementById("error").classList.remove("hidden");
    btn.disabled = false;
    btn.textContent = "Crear registro";
  }
});
