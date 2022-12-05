import { product } from "@prisma/client";

export type ProductSearchRequest = { partNumber: string };
export type ProductSearchResponse = product[];
export type ProductSearchResponseClient = Promise<product[]>;
