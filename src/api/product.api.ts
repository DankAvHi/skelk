import { Router } from "express";
import searchProductController from "../controllers/product/searchProduct.controller";
import { SEARCH_PRODUCT_ROUTE } from "../shared/api/product.api.shared";

const productRouter = Router();

productRouter.post(SEARCH_PRODUCT_ROUTE, searchProductController);

export default productRouter;
