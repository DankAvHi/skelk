import { product } from "@prisma/client";
import { BooleanResponse } from "./api.response";

export type EditProductRequest = product & { [key: string]: string };
export type EditProductResponse = BooleanResponse;
export type EditProductResponseClient = Promise<BooleanResponse>;

export type DeleteProductRequest = { idproduct: product["idproduct"] };
export type DeleteProductResponse = BooleanResponse;
export type DeleteProductResponseClient = Promise<BooleanResponse>;

export type ImportTableProductRequest = FormData;
export type ImportTableProductResponse = BooleanResponse;
export type ImportTableProductResponseClient = Promise<BooleanResponse>;
