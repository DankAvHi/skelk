import nodemailer from "nodemailer";
import { EMAIL_ADDRES, EMAIL_PASSWORD } from "./app.config";

const transporter = nodemailer.createTransport({
     service: "Yandex",
     host: "smtp.yandex.ru",
     secure: true, // true for 465, false for other ports
     auth: {
          user: EMAIL_ADDRES, // generated ethereal user
          pass: EMAIL_PASSWORD, // generated ethereal password
     },
});

export default transporter;
