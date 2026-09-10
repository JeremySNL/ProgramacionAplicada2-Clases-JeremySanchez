import { Router } from "express";
import {
    obtenerTareas,
    obtenerTareaPorId,
    eliminarTarea,
    actualizarTarea,
    crearTarea
} from "../controllers/tarea.controller.js"

import { validarDescripcion } from "../middleware/validaciones.middleware.js"
import { act } from "react";

const router = Router();

router.get("/", obtenerTareas);
router.get("/:id", obtenerTareaPorId);
router.post("/", crearTarea);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

export default router;