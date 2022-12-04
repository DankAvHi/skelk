import { products } from "@prisma/client";

export type ProductsSearchRequest = { partNumber: string };
export type ProductsSearchResponse = products[];
export type ProductsSearchResponseClient = Promise<products[]>;
