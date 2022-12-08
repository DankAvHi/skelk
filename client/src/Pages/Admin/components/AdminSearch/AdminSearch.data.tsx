export type ProductSearchProperties = {
     partNumber: string;
     manufacturer: string;
     description: string;
     deliveryDate: string;
     price: string;
     operation: string;
     [key: string]: any;
};

export const productSearchProperties: ProductSearchProperties = {
     partNumber: "Парт. №",
     manufacturer: "Бренд",
     description: "Описание",
     deliveryDate: "Срок поставки",
     price: "Цена",
     operation: "Операция",
};
