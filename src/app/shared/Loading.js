import React from "react";
import Loader from "../../assets/images/loader-1.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <img class="mt-5 w-60 h-60" src={Loader} alt="Loader" />
    </div>
  );
};

export default Loading;
