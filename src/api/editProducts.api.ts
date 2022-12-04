import { Router } from "express";
import deleteProductsController from "../controllers/editProducts/deleteProduct.controller";
import editProductsController from "../controllers/editProducts/editProduct.controller";
import importTableProductsController from "../controllers/editProducts/importTableProducts.controller";
import verifyMiddleware from "../middlewares/verify.middleware";
import {
     DELETE_PRODUCT_ROUTE,
     EDIT_PRODUCT_ROUTE,
     IMPORT_TABLE_PRODUCTS_ROUTE,
} from "../shared/api/editProducts.api.shared";

const editProductsRouter = Router();

editProductsRouter.use(verifyMiddleware);

editProductsRouter.post(EDIT_PRODUCT_ROUTE, editProductsController);
editProductsRouter.post(IMPORT_TABLE_PRODUCTS_ROUTE, importTableProductsController);
editProductsRouter.delete(DELETE_PRODUCT_ROUTE, deleteProductsController);

export default editProductsRouter;
