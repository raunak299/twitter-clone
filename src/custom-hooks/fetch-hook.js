import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async (requestConfig, applydata) => {
    console.log(requestConfig);
    try {
      setLoading(true);
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
      applydata(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("error");
      setLoading(false);
    }
  };

  return {
    loading,
    sendRequest,
  };
};

export default useFetch;
