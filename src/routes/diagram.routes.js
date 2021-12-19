import { Router } from "express";
import * as diagramController from "../controllers/diagram.controller"

const router = Router();

router.post('/', diagramController.createDiagram);

router.put('/:diagramId', diagramController.updateDiagram)

router.get('/:diagramId', diagramController.getDiagramById);

router.get('/', diagramController.getAllDiagrams);
export default router;
