export enum Role {
    ADMIN = "ADMIN",
    SELLER = "SELLER",
    CUSTOMER = "CUSTOMER",
}
export interface CreateOrderDTO {
    customerId: string;
    quantity: number;
    price: number;
    shippingAddress: string;
    medicineId: string;
    sellerId: string;
    paymentMethod?: string;
}
export enum OrderStatus {
    PENDING = "PENDING",
    CONFIRM = "CONFIRM",
    SHIPPED = "SHIPPED",
    DELIVERY = "DELIVERY",
    CANCELLED = "CANCELLED",
}
