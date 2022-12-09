import { useCallback } from "react";
import { ORDER_PRODUCT_API, SEARCH_PRODUCT_API } from "../../shared/api/product.api.shared";
import {
     ProductOrderRequest,
     ProductOrderResponseClient,
     ProductSearchRequest,
     ProductSearchResponseClient,
} from "../../shared/types/product";
import useFetch from "../useFetch.api";

const useProductApi = () => {
     const { fetcher, loading, error } = useFetch();
     const search = useCallback(
          async (req: ProductSearchRequest): ProductSearchResponseClient =>
               await fetcher({ url: SEARCH_PRODUCT_API, body: req, method: "POST" }),
          []
     );
     const order = useCallback(
          async (req: ProductOrderRequest): ProductOrderResponseClient =>
               await fetcher({ url: ORDER_PRODUCT_API, body: req, method: "POST" }),
          []
     );

     return { search, loading, order, error };
};

export default useProductApi;
