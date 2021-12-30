import { Router } from "express";
import * as unionController from "../controllers/union.controller";

const router = Router();

router.post("/", unionController.createUnion);

router.put("/:unionId", unionController.updateUnion);

router.get('/:unionId', unionController.getUnionById)

export default router;
