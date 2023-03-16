import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.anytimecleaning.net/public/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCategories(data?.data);
        console.log(data?.data);
      });
  }, []);
  return { categories, setCategories, loading };
};

export default useCategories;
