import { Router } from "express";
import orderProductController from "../controllers/product/orderProduct.controller";
import searchProductController from "../controllers/product/searchProduct.controller";
import { ORDER_PRODUCT_ROUTE, SEARCH_PRODUCT_ROUTE } from "../shared/api/product.api.shared";

const productRouter = Router();

productRouter.post(SEARCH_PRODUCT_ROUTE, searchProductController);
productRouter.post(ORDER_PRODUCT_ROUTE, orderProductController);

export default productRouter;
