import { useState, useEffect } from "react";

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d"
      );
      const data1 = await response.json();
      setData(data1);
    } catch (error) {
      console.error(error);
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, error, isLoading, refetch };
};

export default UseFetch;
