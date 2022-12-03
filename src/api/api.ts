import { Router } from "express";
import { AUTH_ROUTE } from "./../shared/api/auth.api.shared";
import authRouter from "./auth.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authRouter);

export default apiRouter;
