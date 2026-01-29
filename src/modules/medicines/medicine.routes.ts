import { Router } from "express";
import { medicineController } from "./medicine.controller";


const router = Router();
router.get("/", medicineController.getMedicines)
router.get("/:id", medicineController.getMedicineById)
router.get("/category", medicineController.getAllMedicinesByCategory)

export const medicineRouter = router;
