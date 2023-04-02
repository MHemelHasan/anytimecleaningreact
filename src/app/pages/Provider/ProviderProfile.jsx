import React from "react";
import useProvider from "../../hooks/useProvider";
import { useParams } from "react-router";
import { AiOutlineUser } from "react-icons/ai";

const ProviderProfile = () => {
    const { id } = useParams();
    const { provider } = useProvider(id);
    console.log("provider:",provider);
    const img_index = provider?.media?.length ? provider.media.length-1 : null;

  return (
    <div className="container mt- pt-5">
      <div className="row mt-5">
        <div className="col-sm-4 pt-5">
        {img_index!==null ?
        <img className="" height={200} width={200} src={provider.media[img_index]?.url} alt="Provider" />:
        <AiOutlineUser style={{color:"#2c9bf4"}} size={300}/>}
        </div>
        <div className="col-sm-8 pt-5">
          <h2 className="pt-5">{provider?.name}</h2>
          <p>Email: {provider?.email}</p>
          <p>Location: {provider?.custom_fields?.address?.value}</p>
          <p>Phone Number: {provider?.phone_number}</p>
          <p>Availability Range: {provider?.availability_range}</p>
          
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 py-5">
          <h3>About</h3>
          <p
            dangerouslySetInnerHTML={{ __html: provider?.description }}/>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
