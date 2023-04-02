import { useEffect, useState } from "react";
import RootURL from '../../components/Contants';

const useOrders = (id) => {
  const [booking, setBooking] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch(RootURL +'bookings')
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

export default useOrders;
