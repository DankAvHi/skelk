import { useCallback } from "react";
import { ORDER_BACK_CALL_API } from "../../shared/api/feedback.api.shared";
import { OrderBackCallRequest, OrderBackCallResponseClient } from "../../shared/types/feedback";
import useFetch from "../useFetch.api";

const useFeedbackApi = () => {
     const { fetcher, loading, error } = useFetch();
     const orderBackCall = useCallback(
          async (req: OrderBackCallRequest): OrderBackCallResponseClient =>
               await fetcher({ url: ORDER_BACK_CALL_API, body: req, method: "POST" }),
          [fetcher]
     );

     return { orderBackCall, loading, error };
};

export default useFeedbackApi;
