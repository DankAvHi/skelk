import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { ProductRandomResponse } from "./../../shared/types/product.d";

const searchRandomProductController: RequestHandler = async (req, res) => {
     try {
          const productsCount = await prisma.product.count();
          const skip = Math.floor(Math.random() * productsCount);

          const randomProducts = await prisma.product.findMany({ take: 3, skip: skip });

          const response: ProductRandomResponse = randomProducts;

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default searchRandomProductController;
