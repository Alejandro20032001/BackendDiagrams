import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/jwt.middleware";

const router = Router();

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.get("/:userId", userController.getUserById);

router.put("/:userId", verifyToken, userController.updateUser);

router.delete("/:userId", verifyToken, userController.deleteUser);
export default router;
