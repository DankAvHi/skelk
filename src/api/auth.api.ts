import { Router } from "express";
import passport from "passport";
import loginController from "../controllers/auth/login.controller";
import logoutController from "../controllers/auth/logout.controller";
import verifyController from "../controllers/auth/verify.controller";
import { LOGIN_ROUTE, LOGOUT_ROUTE, VERIFY_ROUTE } from "./../shared/api/auth.api.shared";

const authRouter = Router();

authRouter.post(LOGIN_ROUTE, passport.authenticate("local"), loginController);
authRouter.delete(LOGOUT_ROUTE, logoutController);
authRouter.get(VERIFY_ROUTE, verifyController);

export default authRouter;
