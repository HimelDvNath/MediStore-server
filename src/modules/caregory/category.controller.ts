import { Request, Response } from "express";
import { categoryServices } from "./category.service";
const getCategoryStats = async (req: Request, res: Response) => {
  try {
    const data = await categoryServices.getCategoryStats();

    return res.status(200).json({
      success: true,
      data
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
export const categoryController = {
    getCategoryStats
}