import { Request, Response } from "express";
import { sellerService } from "./seller.service";

const addMedicine = async (req: Request, res: Response) => {
    try {
        const result = await sellerService.addMedicine(req.body);

        return res.status(201).json({
            success: true,
            message: "Medicine added successfully",
            data: result,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            message: "Failed to add medicine",
        });
    }
};
const updateMedicine = async (req: Request, res: Response) => {
    try {
        const result = await sellerService.updateMedicine({
            id: req.params.id,
            ...req.body,
        });

        return res.status(200).json({
            success: true,
            message: "Medicine updated successfully",
            data: result,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to update medicine",
        });
    }
};
const deleteMedicine = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await sellerService.deleteMedicine(id as string);

        return res.status(200).json({
            success: true,
            message: "Medicine deleted successfully",
            data: result,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Failed to delete medicine",
        });
    }
};
const getSellerOrders = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const order = await sellerService.getSellerOrders(id as string);

        return res.status(200).json({
            success: true,
            message: "Orders retrieved successfully",
            data: order,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message,
        });
    }
};
const UpdateOrderStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        let data = req.body;
        data = {id, ...data}
        const order = await sellerService.UpdateOrderStatus(data)

        return res.status(200).json({
            success: true,
            message: "Order update successfully",
            data: order,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "Failed to update order",
            error: error.message,
        });
    }
};

export const sellerController = {
    addMedicine,
    updateMedicine,
    deleteMedicine,
    getSellerOrders,
    UpdateOrderStatus
};
