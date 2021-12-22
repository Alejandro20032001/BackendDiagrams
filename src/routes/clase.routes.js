import { Router } from "express";
import * as classController from "../controllers/clase.controller";
const router = Router();

router.post("/", classController.createClass);
router.get("/", classController.getClasses);
router.get("/:classId", classController.getClassById);
router.put('/:classId', classController.updateClassById)

export default router;
