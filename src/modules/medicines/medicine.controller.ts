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
export const medicineController = {
    getMedicines
}