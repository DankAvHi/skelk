import { product } from "@prisma/client";
import { BooleanResponse, BooleanResponseClient } from "./api.response";

export type ProductSearchRequest = { partNumber: string };
export type ProductSearchResponse = product[];
export type ProductSearchResponseClient = Promise<ProductSearchResponse>;

export type ProductOrderRequest = { partNumber: string };
export type ProductOrderResponse = BooleanResponse;
export type ProductOrderResponseClient = BooleanResponseClient;

export type ProductRandomRequest = void;
export type ProductRandomResponse = product[];
export type ProductRandomResponseClient = Promise<ProductRandomResponse>;
