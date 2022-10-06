import { useState, useEffect } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoaded(false);
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoaded(true);
      }
    }
    fetchData();
  }, [url]);

  return { isLoaded, data, error };
}
