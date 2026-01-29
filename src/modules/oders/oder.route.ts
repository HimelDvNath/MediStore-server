import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrder);

export const orderRouter = router;
