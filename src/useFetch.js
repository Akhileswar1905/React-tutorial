import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err.message);
      });
  }, [url]);

  return { data, isLoading, err };
};

export default useFetch;
