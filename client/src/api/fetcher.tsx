const fetcher = async <JSON = any,>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
     const res = await fetch(input, init);

     if (!res.ok) {
          const error: Error & { info: any; status: number } = {
               ...new Error("An error occurred while fetching the data."),
               info: await res.json(),
               status: res.status,
          };

          throw error;
     }

     return await res.json();
};

export default fetcher;
