import { Router } from "express";
import orderProductController from "../controllers/product/orderProduct.controller";
import searchProductController from "../controllers/product/searchProduct.controller";
import searchRandomProductController from "../controllers/product/searchRandomProduct.controller";
import { ORDER_PRODUCT_ROUTE, SEARCH_PRODUCT_ROUTE } from "../shared/api/product.api.shared";
import { SEARCH_RANDOM_PRODUCT_ROUTE } from "./../shared/api/product.api.shared";

const productRouter = Router();

productRouter.post(SEARCH_PRODUCT_ROUTE, searchProductController);
productRouter.post(ORDER_PRODUCT_ROUTE, orderProductController);
productRouter.get(SEARCH_RANDOM_PRODUCT_ROUTE, searchRandomProductController);

export default productRouter;
