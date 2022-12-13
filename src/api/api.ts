import { Router } from "express";
import { FEEDBACK_ROUTE } from "../shared/api/feedback.api.shared";
import { AUTH_ROUTE } from "./../shared/api/auth.api.shared";
import { EDIT_PRODUCTS_ROUTE } from "./../shared/api/editProduct.api.shared";
import { PRODUCT_ROUTE } from "./../shared/api/product.api.shared";
import authRouter from "./auth.api";
import editProductRouter from "./editProduct.api";
import feedbackRouter from "./feedback.api";
import productRouter from "./product.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authRouter);
apiRouter.use(PRODUCT_ROUTE, productRouter);
apiRouter.use(FEEDBACK_ROUTE, feedbackRouter);
apiRouter.use(EDIT_PRODUCTS_ROUTE, editProductRouter);

export default apiRouter;
