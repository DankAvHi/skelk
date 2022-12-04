import { Router } from "express";
import searchProductsController from "../controllers/products/searchProducts.controller";
import { SEARCH_PRODUCTS_ROUTE } from "./../shared/api/products.api.shared";

const productsRouter = Router();

productsRouter.post(SEARCH_PRODUCTS_ROUTE, searchProductsController);

export default productsRouter;
