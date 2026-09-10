export const validarDescripcion = (req, res, next) => {
  if (!req.body.descripcion) {
    return res.status(400).json({
      error: "La descripcion es un campo requerido",
    });
  }

  next();
};