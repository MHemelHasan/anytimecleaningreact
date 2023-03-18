import { useEffect, useState } from "react";

const useFaqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.anytimecleaning.net/public/api/faqs`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFaqs(data?.data);
        console.log(data?.data);
      });
  }, []);
  return { faqs, setFaqs, loading };
};

export default useFaqs;
