import { Router } from "express";
import { medicineController } from "./medicine.controller";


const router = Router();
router.get("/", medicineController.getMedicines)

export const medicineRouter = router;
