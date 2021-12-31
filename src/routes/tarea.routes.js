import { Router } from "express";
import * as tareaController from "../controllers/tarea.controller";
const router = Router();

router.post("/", tareaController.createTarea);
router.get("/:tareaId", tareaController.getTareaById);
router.get("/:userId", tareaController.getAllTareasFromTeacher);

export default router;
