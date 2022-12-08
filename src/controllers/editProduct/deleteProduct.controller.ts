import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { DeleteProductRequest, DeleteProductResponse } from "../../shared/types/editProduct";
import { prisma } from "./../../services/connectToDatabase.service";

const deleteProductController: RequestHandler = async (req, res) => {
     try {
          const { idproduct }: DeleteProductRequest = req.body;

          const product = await prisma.product.delete({ where: { idproduct: idproduct } });

          const response: DeleteProductResponse = { succes: !!product };

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default deleteProductController;
