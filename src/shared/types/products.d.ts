import { BooleanResponse } from "./api.response";

export type ProductRequest = { partNumber: string };
export type ProductResponse = BooleanResponse &
     {
          idProducts: number;
          partNumber: string;
          manufacturer: string;
          description: string;
          deliveryDate: string;
          price: number;
     }[];
