import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string | null>(null);

     const clearError = useCallback(() => {
          setError(null);
     }, []);

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const fetcher = useCallback(
          async <JSON = any,>({
               url,
               body,
               method = "GET",
               isJson = true,
               options = {},
          }: {
               url: RequestInfo;
               body?: BodyInit | null | undefined | FormData | any;
               method?: RequestInit["method"];
               isJson?: boolean;
               options?: RequestInit;
          }): Promise<JSON> => {
               try {
                    setLoading(true);
                    const isCanHaveBody = method !== "GET" && method !== "HEAD";
                    if (isJson && isCanHaveBody) {
                         options.body = JSON.stringify(body);
                         options.headers = new Headers(options.headers);
                         options.headers.set("Content-Type", "application/json");
                    } else if (isCanHaveBody) options.body = body;

                    options.method = method;

                    const res = await fetch(url, options);

                    if (!res.ok) {
                         const error: Error & { info: any; status: number } = {
                              ...new Error("An error occurred while fetching the data."),
                              info: await res.json(),
                              status: res.status,
                         };

                         throw error;
                    }
                    const data = await res.json();
                    setLoading(false);

                    return data;
               } catch (e: any) {
                    setLoading(false);
                    setError(e.message);
                    throw e;
               }
          },
          []
     );

     return { loading, fetcher, error, clearError };
};
export default useFetch;
