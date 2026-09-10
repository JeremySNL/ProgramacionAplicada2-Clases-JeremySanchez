import prisma from "../db.js";

// GET: Obtener todas las tareas
export const obtenerTareas = async (req, res) => {
  const tareas = await prisma.tarea.findMany();
  res.json(tareas);
};

// GET: Obtener una tarea en especifico por id
export const obtenerTareaPorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = await prisma.tarea.findUnique({
    where: { id },
  });
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(tarea);
};

// POST: Crear nueva tarea
export const crearTarea = async (req, res) => {
  const { descripcion } = req.body;
  const tarea = await prisma.tarea.create({ data: { descripcion } });
  res.status(201).json(tarea);
};

// PUT: Actualizacion dinamica
export const actualizarTarea = async (req, res) => {
  const id = parseInt(req.params.id);
  const tareaExiste = await prisma.tarea.findUnique({ where: { id } });
  if (!tareaExiste)
    return res.status(404).json({ error: "Tarea no encontrada" });
  const { descripcion, completada } = req.body;
  const tarea = await prisma.tarea.update({
    where: { id },
    data: {
      ...(descripcion !== undefined && { descripcion }),
      ...(completada !== undefined && { completada }),
    },
  });
  res.json(tarea);
};

// DELETE: Eliminar tarea
export const eliminarTarea = async (req, res) => {
  const id = parseInt(req.params.id);
  const tareaEliminada = await prisma.tarea.delete({
    where: { id },
  });
  res.json({
    mensaje: "Tarea eliminada correctamente.",
  });
};
