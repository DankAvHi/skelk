import { RequestHandler } from "express";
import { EMAIL_ADDRES } from "../../config/app.config";
import transporter from "../../config/mail.config";
import requestServerError from "../../errors/requestServerError.error";
import { OrderBackCallRequest, OrderBackCallResponse } from "./../../shared/types/feedback.d";

const orderBackCallController: RequestHandler = async (req, res) => {
     try {
          const { phoneNumber, name }: OrderBackCallRequest = req.body;

          await transporter.sendMail({
               from: `СКЭЛК Склад электронных компонентов info@skelk.ru`,
               to: `${EMAIL_ADDRES}`,
               subject: `Заявка на товар `,
               text: `Поступила заявка на обратный звонок.\nИмя клиента: ${name}\nНомер телефона клиента: ${phoneNumber}.`,
          });

          const response: OrderBackCallResponse = { succes: true };

          res.json(response);
     } catch (error) {
          requestServerError(error, res);
     }
};

export default orderBackCallController;
