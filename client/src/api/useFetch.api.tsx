import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<Error | null>(null);

     const clearError = useCallback(() => {
          setError(null);
     }, []);

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const fetcher = useCallback(
          async <JSON = unknown,>({
               url,
               body,
               method = "GET",
               isJson = true,
               options = {},
          }: {
               url: RequestInfo;
               body?: BodyInit | null | undefined | FormData | unknown;
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
                    } else if (isCanHaveBody) options.body = body as BodyInit;

                    options.method = method;

                    const res = await fetch(url, options);

                    if (!res.ok) {
                         const error: Error & { info: string; status: number } = {
                              ...new Error("An error occurred while fetching the data."),
                              info: await res.json().catch((err) => res.statusText),
                              status: res.status,
                         };
                         setError(error);
                         throw error;
                    }
                    const data = await res.json();
                    setLoading(false);

                    return data;
               } catch (e) {
                    setLoading(false);
                    // setError(e);
                    throw e;
               }
          },
          []
     );

     return { loading, fetcher, error, clearError };
};
export default useFetch;
