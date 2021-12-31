import { Router } from "express";
import * as respuestaController from "../controllers/respuesta.controller";
const router = Router();

router.post("/", respuestaController.createRespuesta);
router.get("/:tareaId", respuestaController.getAllResponces);
router.get("/:responceId", respuestaController.getResponceById);

export default router;
