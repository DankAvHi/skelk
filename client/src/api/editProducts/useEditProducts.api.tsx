import { useCallback } from "react";
import { EDIT_PRODUCT_API } from "../../shared/api/editProducts.api.shared";
import { EditProductRequest, EditProductResponseClient } from "../../shared/types/editProducts";
import useFetch from "../useFetch.api";

const useEditProductsApi = () => {
     const { fetcher, loading, error } = useFetch();
     const edit = useCallback(
          async (req: EditProductRequest): EditProductResponseClient =>
               await fetcher({ url: EDIT_PRODUCT_API, body: req, method: "POST" }),
          []
     );

     return { edit, loading, error };
};

export default useEditProductsApi;
