import { Router } from "express";
import deleteProductController from "../controllers/editProduct/deleteProduct.controller";
import editProductController from "../controllers/editProduct/editProduct.controller";
import importTableProductController from "../controllers/editProduct/importTableProduct.controller";
import verifyMiddleware from "../middlewares/verify.middleware";
import upload from "../services/upload.service";
import {
     DELETE_PRODUCT_ROUTE,
     EDIT_PRODUCT_ROUTE,
     IMPORT_TABLE_PRODUCT_ROUTE,
} from "../shared/api/editProduct.api.shared";

const editProductRouter = Router();

editProductRouter.use(verifyMiddleware);

editProductRouter.post(EDIT_PRODUCT_ROUTE, editProductController);
editProductRouter.post(IMPORT_TABLE_PRODUCT_ROUTE, upload.single("file"), importTableProductController);
editProductRouter.delete(DELETE_PRODUCT_ROUTE, deleteProductController);

export default editProductRouter;
