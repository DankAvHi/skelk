import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { ProductSearchRequest, ProductSearchResponse } from "./../../shared/types/product.d";

const searchProductController: RequestHandler = async (req, res) => {
     try {
          const { partNumber }: ProductSearchRequest = req.body;

          const product = await prisma.product.findMany({ where: { partNumber: { contains: partNumber } } });

          const response: ProductSearchResponse = product;

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default searchProductController;
