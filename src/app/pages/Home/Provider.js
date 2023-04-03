import React, { useEffect, useState } from "react";
import Team1 from "../../../assets/uploads/media-uploader/group-1-min1620466547.png";
import Team2 from "../../../assets/uploads/media-uploader/group-2-min1620466899.png";
import Team3 from "../../../assets/uploads/media-uploader/group-3-min1620467338.png";
import Team4 from "../../../assets/uploads/media-uploader/group-5-min1620467501.png";
import provider_img from "../../../assets/uploads/media-uploader/provider.png";
import useProviders from "../../hooks/useProviders";
import { Link } from "react-router-dom";

const Provider = ({slice_value}) => {
    const [sliceLimit,setSliceLimit] = useState(false);
    const { providers } = useProviders();
    const [allProviders,setAllProviders] = useState(null);
    console.log("providers:",allProviders);

    useEffect(() => {
        if(slice_value){
            setAllProviders(providers?.data)
            setSliceLimit(providers?.data?.length);
        }else{
            const featuredProvider = providers?.data?.filter((provider) => provider.featured);
            setAllProviders(featuredProvider);
            setSliceLimit(4);
        }
        
      }, [slice_value,providers]);

    return (<section className="creative-team-area padding-top-110 padding-bottom-85">
            <div className="container">
                <div className="row justify-content-center padding-bottom-45">
                    <div className="col-lg-8">
                        <div className="section-title desktop-center">
                            <div className="icon">
                                <span className="line-one"></span>
                                <span className="line-two"></span>
                                <i className="flaticon-paint-brush"></i>
                                <span className="line-three"></span>
                                <span className="line-four"></span>
                            </div>
                            <h2 className="title">Meet Our highly expert providers</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {allProviders && allProviders.slice(0,sliceLimit).map((provider,index)=>(
                    <div key={index} className="col-lg-3 col-sm-6">
                        <div className="appointment-single-item">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage: `url(${provider?.media[0]?.url ? provider.media[0].url : provider_img})`
                                }}
                            >
                                <div className="cat">
                                    <a href="#">Provider</a>
                                </div>
                            </div>
                            <div className="content">
                                <div className="top-part">
                                    <span className="designation">Specialist</span>
                                    <div className="rating-wrap">
                                        <div className="ratings">
                                            <span className="hide-rating"></span>
                                            <span
                                                className="show-rating"
                                                style={{width: `${provider?.rate*20}%`}}
                                            ></span>
                                        </div>
                                        <p>
                                            <span className="total-ratings">({provider?.rate})</span>
                                        </p>
                                    </div>
                                </div>
                                <Link to={`/provider/${provider?.id}`}>
                                    <h4 className="title">{provider?.name}</h4>
                                </Link>
                                <span className="location">
                                    <i className="fas fa-map-marker-alt"></i>{provider?.custom_fields.address?.view}
                                </span>
                                <p>
                                    {provider?.custom_fields?.bio?.view}
                                </p>
                                <div className="btn-wrapper">
                                <Link to={`/provider/${provider?.id}`} className="boxed-btn">
                                        View Profile
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                </div>
            </div>
        </section>);
};

export default Provider;
