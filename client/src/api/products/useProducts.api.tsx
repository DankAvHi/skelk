import { useCallback } from "react";
import { SEARCH_PRODUCTS_API } from "../../shared/api/products.api.shared";
import { ProductsSearchRequest, ProductsSearchResponseClient } from "../../shared/types/products";
import useFetch from "../useFetch.api";

const useProductsApi = () => {
     const { fetcher, loading } = useFetch();
     const search = useCallback(
          async (req: ProductsSearchRequest): ProductsSearchResponseClient =>
               await fetcher({ url: SEARCH_PRODUCTS_API, body: req, method: "POST" }),
          []
     );

     return { search, loading };
};

export default useProductsApi;
