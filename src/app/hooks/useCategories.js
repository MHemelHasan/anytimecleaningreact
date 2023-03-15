import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`https://api.anytimecleaning.net/public/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setReload(false);
        setCategories(data?.data);
        console.log(data?.data);
      });
  }, []);
  return { categories, setCategories, reload };
};

export default useCategories;
