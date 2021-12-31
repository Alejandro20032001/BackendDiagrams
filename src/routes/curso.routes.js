import { Router } from "express";
import * as cursoController from "../controllers/curso.controller";
const router = Router();

router.post("/", cursoController.createCourse);
router.get("/", cursoController.getAllCourses);
router.get("/:courseId", cursoController.getCourseById);

export default router;
