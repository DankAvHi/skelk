import { Router } from "express";
import { AUTH_ROUTE } from "./../shared/api/auth.api.shared";
import { EDIT_PRODUCTS_ROUTE } from "./../shared/api/editProducts.api.shared";
import { PRODUCTS_ROUTE } from "./../shared/api/products.api.shared";
import authRouter from "./auth.api";
import editProductsRouter from "./editProducts.api";
import productsRouter from "./products.api";

const apiRouter = Router();

apiRouter.use(AUTH_ROUTE, authRouter);
apiRouter.use(PRODUCTS_ROUTE, productsRouter);
apiRouter.use(EDIT_PRODUCTS_ROUTE, editProductsRouter);

export default apiRouter;
