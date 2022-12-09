import { product } from "@prisma/client";
import { RequestHandler } from "express";
import fs from "fs";
import { readFile, utils } from "xlsx";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import { ImportTableProductResponse } from "../../shared/types/editProduct";

type rawProduct = product & {
     ["Парт номер"]?: string;
     ["Производитель"]?: string;
     ["Описание"]?: string;
     ["Срок"]?: string;
     ["Цена"]?: string;
     [key: string]: any;
};

const importTableProductController: RequestHandler = async (req, res) => {
     try {
          if (!req.file) {
               throw new Error("Cannot load file");
          }

          const file: Express.Request["file"] = req.file;

          const workBox = await readFile(file.path);

          const products: product[] = utils
               .sheet_to_json<rawProduct>(workBox.Sheets[workBox.SheetNames[0]], {})
               .map((product) => {
                    product.partNumber = product["Парт номер"]!;
                    product.manufacturer = product["Производитель"]!;
                    product.description = product["Описание"]!;
                    product.deliveryDate = product["Срок"]!;
                    product.price = product["Цена"]!;

                    delete product["Парт номер"];
                    delete product["Производитель"];
                    delete product["Описание"];
                    delete product["Срок"];
                    delete product["Цена"];
                    Object.keys(product).forEach((property) => product[property] && product[property].trim());
                    return product;
               });

          for (let index = 0; index < products.length; index++) {
               const isUnique = !!!(await prisma.product.findFirst({
                    where: { partNumber: products[index].partNumber },
               }));

               if (isUnique) {
                    await prisma.product.create({
                         data: products[index],
                    });
               } else {
                    await prisma.product.updateMany({
                         where: { partNumber: products[index].partNumber },
                         data: products[index],
                    });
               }
          }

          fs.unlink(file.path, (err: any) => {});

          const response: ImportTableProductResponse = { succes: true };
          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default importTableProductController;
