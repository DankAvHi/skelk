import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";

const logoutController: RequestHandler = async (req, res, next) => {
     try {
          req.logout((err) => {
               res.clearCookie("connect.sid");
               req.session.destroy((err) => {
                    res.json({ succes: true });
               });
          });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default logoutController;
