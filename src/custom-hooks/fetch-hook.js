import { useCallback, useState } from "react";

const useFetch = () => {
  // const [error, setError] = useState("");

  const sendRequest = useCallback(async (requestConfig) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? requestConfig.body : null,
        headers: requestConfig.headers
          ? requestConfig.headers
          : { "content-type": "application/json" },
      });
      if (!response.ok) {
        console.log(response);
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useFetch;
