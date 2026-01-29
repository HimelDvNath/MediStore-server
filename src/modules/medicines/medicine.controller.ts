import { Request, Response } from "express";
import { medicineService } from "./medicine.service";
const getMedicines = async (req: Request, res: Response) => {
  try {
    const medicines = await medicineService.getAllMedicines();

    return res.status(200).json({
      success: true,
      data: medicines
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
const getAllMedicinesByCategory = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const medicines = await medicineService.getAllMedicinesByCategory(body);

    return res.status(200).json({
      success: true,
      data: medicines
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
const getMedicineById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const medicines = await medicineService.getMedicineById(id as string);

    return res.status(200).json({
      success: true,
      data: medicines
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const medicineController = {
    getMedicines,
    getAllMedicinesByCategory,
    getMedicineById,
}