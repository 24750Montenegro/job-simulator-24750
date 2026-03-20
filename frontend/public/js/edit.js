import { getOne, update } from "./api.js";

const id = new URLSearchParams(window.location.search).get("id");

async function load() {
  try {
    const r = await getOne(id);
    const form = document.getElementById("form");
    form.nombre.value      = r.nombre;
    form.descripcion.value = r.descripcion;
    form.categoria.value   = r.categoria;
    form.stock.value       = r.stock;
    form.precio.value      = r.precio;
    form.disponible.checked = r.disponible === true || r.disponible === "true";
  } catch (e) {
    document.getElementById("error").textContent = `Error al cargar el registro: ${e.message}`;
    document.getElementById("error").classList.remove("hidden");
  }
}

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Guardando...";

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
    await update(id, payload);
    window.location.href = "index.html";
  } catch (e) {
    document.getElementById("error").textContent = `Error al actualizar: ${e.message}`;
    document.getElementById("error").classList.remove("hidden");
    btn.disabled = false;
    btn.textContent = "Guardar cambios";
  }
});

load();
