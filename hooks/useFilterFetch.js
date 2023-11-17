import { useState, useEffect } from "react";

const UseFilterFetch = ({ id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d"
      );
      const data1 = await response.json();
      const employee = data1.filter((emp) => {
        return emp.id == id;
      });
      const empObj = employee[0];
      let manager = [];
      if (empObj["parentId"] != null) {
        manager = data1.filter((emp) => {
          return emp.id == empObj["parentId"];
        });
      } else {
        manager = [{ name: "No Manager" }];
      }
      const subOrdinates = data1.filter((emp) => {
        return emp.parentId == empObj["id"];
      });
      const managerObj = manager[0];
      setData([empObj, managerObj, subOrdinates]);
    } catch (error) {
      console.error(error);
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData(id);
  };

  return { data, error, isLoading, refetch };
};

export default UseFilterFetch;
