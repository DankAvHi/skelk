import { RequestHandler } from "express";
import { EMAIL_ADDRES } from "../../config/app.config";
import transporter from "../../config/mail.config";
import requestServerError from "../../errors/requestServerError.error";
import { prisma } from "../../services/connectToDatabase.service";
import validateEmail from "../../utils/validateEmail.util";
import { ProductOrderRequest, ProductOrderResponse } from "./../../shared/types/product.d";

const orderProductController: RequestHandler = async (req, res) => {
     try {
          const { partNumber, email }: ProductOrderRequest = req.body;

          const product = await prisma.product.findUnique({ where: { partNumber: partNumber } });

          if (!product) return res.status(404).json({ error: "not found" });
          if (!validateEmail(email)) return res.status(409).json({ error: "email not existed" });

          await transporter.sendMail({
               from: `СКЭЛК Склад электронных компонентов info@skelk.ru`,
               to: `${EMAIL_ADDRES}`,
               subject: `Заявка на товар `,
               text: `Поступила заявка на покупку товара.\nЭлектронная почта клиента: ${email}.\nПарт.№ Товара: ${partNumber}`,
          });

          const response: ProductOrderResponse = { succes: true };

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default orderProductController;
