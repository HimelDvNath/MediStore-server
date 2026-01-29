import { prisma } from "../../lib/prisma";

const getCategoryStats = async () => {
    const categories = await prisma.medicine.groupBy({
        by: ["categoryName"],
        where: {
            isActive: true,
        },
    });

    return {
        totalCategories: categories.length,
        categoryNames: categories.map((c) => c.categoryName),
    };
};
export const categoryServices = {
    getCategoryStats
}