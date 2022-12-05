import { product } from "@prisma/client";
import { BooleanResponse } from "./api.response";

export type EditProductRequest = product & { [key: string]: any };
export type EditProductResponse = BooleanResponse;
export type EditProductResponseClient = Promise<BooleanResponse>;

export type DeleteProductRequest = { idproduct: product["idproduct"] };
export type DeleteProductResponse = BooleanResponse;
export type DeleteProductResponseClient = Promise<BooleanResponse>;
