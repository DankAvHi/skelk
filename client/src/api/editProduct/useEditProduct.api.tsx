import { useCallback } from "react";
import { DELETE_PRODUCT_API, EDIT_PRODUCT_API } from "../../shared/api/editProduct.api.shared";
import {
     DeleteProductRequest,
     DeleteProductResponseClient,
     EditProductRequest,
     EditProductResponseClient,
} from "../../shared/types/editProduct";
import useFetch from "../useFetch.api";

const useEditProductApi = () => {
     const { fetcher, loading, error } = useFetch();
     const edit = useCallback(
          async (req: EditProductRequest): EditProductResponseClient =>
               await fetcher({ url: EDIT_PRODUCT_API, body: req, method: "POST" }),
          []
     );

     const deleteProduct = useCallback(
          async (req: DeleteProductRequest): DeleteProductResponseClient =>
               await fetcher({ url: DELETE_PRODUCT_API, body: req, method: "DELETE" }),
          []
     );

     return { edit, deleteProduct, loading, error };
};

export default useEditProductApi;
