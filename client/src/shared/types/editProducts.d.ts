import { products } from "@prisma/client";
import { BooleanResponse } from "./api.response";

export type EditProductRequest = products & { [key: string]: any };
export type EditProductResponse = BooleanResponse;
export type EditProductResponseClient = Promise<BooleanResponse>;
