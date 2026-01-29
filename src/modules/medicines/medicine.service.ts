import { prisma } from "../../lib/prisma";

const getAllMedicines = async () => {
  return prisma.medicine.findMany({
    where: {
      isActive: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
};
const getAllMedicinesByCategory = async (payload:{
    categoryName: string
}) => {
  return prisma.medicine.findMany({
    where: {
      categoryName: payload.categoryName
    },
    orderBy: {
      createdAt: "desc"
    }
  });
};

export const medicineService = {
    getAllMedicines,
    getAllMedicinesByCategory
}
