import { useEffect, useState } from "react";

const useBooking = (id) => {
  const [booking, setBooking] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:8000/api/bookings/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
      });
  }, []);

  return {
    booking,
    setBooking,
    reload,
    setReload,
  };
};

export default useBooking;
