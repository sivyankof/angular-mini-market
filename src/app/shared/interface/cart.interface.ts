export interface Cart {
    idProduct: string;
    title: string;
    count: number;
    price: number;
    totalPrice: number;
    sale?: string;
    nameUser?: string;
}
