const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Servidor en el puerto 3000"));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const validarDescripcion = (req, res, next) => {
  if (!req.body.descripcion) {
    return res.status(400).json({
      error: "La descripcion es un campo requerido",
    });
  }

  next();
};

app.get("/ping", (req, res) => {
  res.send("pongggg");
});

app.get("/usuarios/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.get("/buscar/", (req, res) => {
  res.json({ nombre: req.query.nombre });
});

app.post("/usuarios", (req, res) => {
  const { nombre, edad } = req.body;
  res.json({ recibido: { nombre, edad } });
});

// Otra vaina ahi

let tareas = [
  {
    id: 1,
    descripcion: "La mejor tarea que hay",
  },
];
let nextId = 2;

app.get("/tareas/:id", (req, res) => {
  const tarea = tareas.find((t) => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(tarea);
});

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.post("/tareas", (req, res) => {
  const { descripcion } = req.body;
  const tarea = { id: nextId++, descripcion, completada: false };
  tareas.push(tarea);
  res.status(201).json(tarea);
});

app.delete("/tareas/:id", (req, res) => {
  const index = tareas.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ error: "Tarea no encontrada" });
  tareas.splice(index, 1);
  res.json({ mensaje: "Fue eliminado" });
});

app.put("/tareas/:id", (req, res) => {
  const tarea = tareas.find((t) => t.id === parseInt(req.params.id));
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  const { descripcion, completada } = req.body;
  if (descripcion !== undefined) tarea.descripcion = descripcion;
  if (completada !== undefined) tarea.completada = completada;
  res.json(tarea);
});
