import { RequestHandler } from "express";
import requestServerError from "../../errors/requestServerError.error";

const logoutController: RequestHandler = async (req, res) => {
     try {
          req.logout(() => {
               res.clearCookie("connect.sid");
               req.session.destroy(() => {
                    res.json({ succes: true });
               });
          });
     } catch (e) {
          requestServerError(e, res);
     }
};

export default logoutController;
