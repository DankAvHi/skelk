import { useCallback } from "react";
import { SEARCH_PRODUCT_API } from "../../shared/api/product.api.shared";
import { ProductSearchRequest, ProductSearchResponseClient } from "../../shared/types/product";
import useFetch from "../useFetch.api";

const useProductApi = () => {
     const { fetcher, loading } = useFetch();
     const search = useCallback(
          async (req: ProductSearchRequest): ProductSearchResponseClient =>
               await fetcher({ url: SEARCH_PRODUCT_API, body: req, method: "POST" }),
          []
     );

     return { search, loading };
};

export default useProductApi;
