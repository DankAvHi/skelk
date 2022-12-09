import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { ProductOrderRequest } from "./../../../client/src/shared/types/product.d";
import { ProductOrderResponse } from "./../../shared/types/product.d";

const orderProductController: RequestHandler = async (req, res) => {
     try {
          const { partNumber }: ProductOrderRequest = req.body;

          const isProductExist = !!(await prisma.product.findUnique({ where: { partNumber: partNumber } }));

          if (!isProductExist) return res.status(404).json({ error: "not found" });

          const response: ProductOrderResponse = { succes: true };

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default orderProductController;
