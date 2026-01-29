import { prisma } from "../../lib/prisma";

export const getAllMedicines = async () => {
  return prisma.medicine.findMany({
    where: {
      isActive: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
};
export const medicineService = {
    getAllMedicines
}
