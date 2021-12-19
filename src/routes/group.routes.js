import { Router } from "express"
import * as grupoController from "../controllers/grupo.controller"
const router = Router();

router.put('/:grupoId', grupoController.updateGroup);
router.get('/:grupoId', grupoController.getGroutById);
export default router;