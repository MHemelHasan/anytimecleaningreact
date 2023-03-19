import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [productDetail, setProductDetail] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `https://api.anytimecleaning.net/public/api/e_services${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProductDetail(data);
        console.log(data);
      });
  }, []);

  return {
    productDetail,
    setProductDetail,
    reload,
    setReload,
  };
};

export default useProductDetails;
