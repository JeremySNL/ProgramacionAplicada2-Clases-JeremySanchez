import express, { json } from "express";
import loggerMiddleware from "./middlewares/logger.middleware.js"
import apiKeyMiddleware from "./middlewares/apiKey.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware, apiKeyMiddleware);

app.listen(PORT, () => { console.log(`Servidor en el puerto ${PORT}`) });