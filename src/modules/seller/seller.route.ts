import { Router } from "express";
import {sellerController } from "./seller.controller";


const router = Router();

router.post("/medicines", sellerController.addMedicine);
router.put("/medicines/:id", sellerController.updateMedicine);
router.delete("/medicines/:id", sellerController.deleteMedicine);
router.get("/orders", sellerController.getSellerOrders);
router.patch("/orders/:id", sellerController.UpdateOrderStatus);

export const sellerRoutes = router;
