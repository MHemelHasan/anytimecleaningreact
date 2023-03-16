import { useEffect, useState } from "react";

const useProductDetails = (id) => {
  const [parts, setParts] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `https://api.anytimecleaning.net/public/api/e_services/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setParts(data));
  }, [id, setParts, reload]);

  return {
    parts,
    setParts,
    reload,
    setReload,
  };
};

export default useProductDetails;
