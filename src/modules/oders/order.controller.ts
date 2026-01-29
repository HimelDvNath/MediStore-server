import { Request, Response } from "express";
import { CreateOrderDTO } from "../../types";
import { orderServices } from "./order.service";


const createOrder = async (req: Request, res: Response) => {
    try {
        const body: CreateOrderDTO = req.body;

        const order = await orderServices.createOrder(body);

        return res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Failed to create order",
            error: error.message,
        });
    }
};
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderServices.getAllOrders();

        return res.status(200).json({
            success: true,
            message: "Orders retrieved successfully",
            data: orders,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message,
        });
    }
};
const getOrder = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const order = await orderServices.getOrder(id as string);

        return res.status(200).json({
            success: true,
            message: "Order retrieved successfully",
            data: order,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch order",
            error: error.message,
        });
    }
};

export const orderController = {
    createOrder,
    getAllOrders,
    getOrder,
};
