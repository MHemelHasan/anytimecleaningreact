import React from "react";
import useProvider from "../../hooks/useProvider";
import { useParams } from "react-router";
import { AiOutlineUser } from "react-icons/ai";

const ProviderProfile = () => {
    const { id } = useParams();
    const { provider } = useProvider(id);
    console.log("provider:",provider);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
        {provider?.media?.url ?
        <img height={200} width={200} src={provider.media[0]?.url} alt="Provider" />:
        <AiOutlineUser style={{color:"#2c9bf4"}} size={300}/>}
        </div>
        <div className="col-sm-8">
          <h2>{provider?.name}</h2>
          <p>Email: {provider?.email}</p>
          <p>Location: {provider?.custom_fields?.address?.value}</p>
          <p>Phone Number: {provider?.phone_number}</p>
          <p>Availability Range: {provider?.availability_range}</p>
          <button type="button" className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h3>About</h3>
          <p>
            {provider?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
