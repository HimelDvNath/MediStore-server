import express from "express";
import cors from "cors";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import config from "./config";
import { authRoutes } from "./modules/auth/auth.route";
import { orderRouter } from "./modules/oders/oder.route";
import { sellerRoutes } from "./modules/seller/seller.route";
import { medicineRouter } from "./modules/medicines/medicine.routes";

const app = express();

app.use(
    cors({
        origin: config.APP_URL || "http://localhost:3000", // client side url
        credentials: true,
    }),
);

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/admin/users", authRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/orders", orderRouter);
app.use("/api/medicines", medicineRouter);
export default app;
