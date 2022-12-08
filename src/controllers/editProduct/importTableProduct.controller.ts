import { RequestHandler } from "express";
import fs from "fs";
import { readFile, utils } from "xlsx";
import requestServerError from "../../errors/requestServerError.error";
import { ImportTableProductResponse } from "../../shared/types/editProduct";

type RawProduct = {
     partNumber: string;
     manufacturer: string;
     description: string;
};

const importTableProductController: RequestHandler = async (req, res) => {
     try {
          if (!req.file) {
               throw new Error("Cannot load file");
          }

          const file: Express.Request["file"] = req.file;

          const workBox = await readFile(file.path);

          const rawProducts: RawProduct[] = utils
               .sheet_to_json(workBox.Sheets[workBox.SheetNames[0]], {})
               .map((rawProduct: any) => {
                    rawProduct.partNumber = rawProduct["Парт номер"]!;
                    rawProduct.manufacturer = rawProduct["Производитель"]!;
                    rawProduct.description = rawProduct["Описание"]!;

                    delete rawProduct["Парт номер"];
                    delete rawProduct["Производитель"];
                    delete rawProduct["Описание"];
                    return rawProduct;
               });
          console.log(rawProducts);
          fs.unlink(file.path, (err: any) => {});

          const response: ImportTableProductResponse = { succes: true };
          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default importTableProductController;
