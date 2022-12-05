import { product } from "@prisma/client";
import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { EditProductResponse } from "../../shared/types/editProduct";
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const editProductController: RequestHandler = async (req, res) => {
     try {
          const product: product = req.body;
          let response: EditProductResponse;

          if (!product.idproduct) {
               let productWithoutId: PartialBy<product, "idproduct"> = { ...product };
               delete productWithoutId.idproduct;
               const newProduct = await prisma.product.create({ data: productWithoutId });

               response = { succes: !!newProduct };
          } else {
               const newProduct = await prisma.product.update({
                    where: { idproduct: product.idproduct },
                    data: product,
               });
               response = { succes: !!newProduct };
          }

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default editProductController;
