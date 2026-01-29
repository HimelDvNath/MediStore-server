import { Request, Response } from "express";
import { authServices } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        console.log("from controller: ", payload);
        const result = await authServices.createUser(payload);

        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({
            data: null,
            message: "User creation failed",
            error: (error as Error).message,
        });
    }
};
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await authServices.getAllUsers();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            data: null,
            message: "Failed to fetch users",
        });
    }
};
const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const payload = { id: userId, ...req.body };

        const result = await authServices.updateUser(payload);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({
            data: null,
            message: "User update failed",
        });
    }
};

export const authController = {
    createUser,
    getAllUsers,
    updateUser
};
