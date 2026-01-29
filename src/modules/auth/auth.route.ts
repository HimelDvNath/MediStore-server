import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// Sign up with email
router.post("/sign-up/email", authController.createUser);
router.get("/", authController.getAllUsers);
router.patch("/:id", authController.updateUser);

export const authRoutes = router;
