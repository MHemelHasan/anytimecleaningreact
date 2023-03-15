import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`https://api.anytimecleaning.net/public/api/e_services`)
      .then((response) => response.json())
      .then((data) => {
        setReload(false);
        setProducts(data?.data);
        console.log(data?.data);
      });
  }, []);
  return { products, setProducts, reload };
};

export default useProducts;
