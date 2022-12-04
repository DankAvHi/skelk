import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { ProductsSearchRequest, ProductsSearchResponse } from "./../../shared/types/products.d";

const searchProductsController: RequestHandler = async (req, res) => {
     try {
          const { partNumber }: ProductsSearchRequest = req.body;

          const products = await prisma.products.findMany({ where: { partNumber: { contains: partNumber } } });

          const response: ProductsSearchResponse = products;

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default searchProductsController;
