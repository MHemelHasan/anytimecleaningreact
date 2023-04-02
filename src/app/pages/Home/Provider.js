import React from "react";
import Team1 from "../../../assets/uploads/media-uploader/group-1-min1620466547.png";
import Team2 from "../../../assets/uploads/media-uploader/group-2-min1620466899.png";
import Team3 from "../../../assets/uploads/media-uploader/group-3-min1620467338.png";
import Team4 from "../../../assets/uploads/media-uploader/group-5-min1620467501.png";
import useProviders from "../../hooks/useProviders";

const Provider = () => {
    const { providers } = useProviders();
    console.log("providers:",providers);
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
                {providers.data && providers?.data.map((provider,index)=>(
                    <div key={index} className="col-lg-3 col-sm-6">
                        <div className="appointment-single-item">
                            <div
                                className="thumb"
                                style={{
                                    backgroundImage: `url(${provider?.media[0]?.url ? provider.media[0].url : Team1})`
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
                                                style={{width: "100%"}}
                                            ></span>
                                        </div>
                                        <p>
                                            <span className="total-ratings">(1)</span>
                                        </p>
                                    </div>
                                </div>
                                <a href="#">
                                    <h4 className="title">{provider?.name}</h4>
                                </a>
                                <span className="location">
                    <i className="fas fa-map-marker-alt"></i>{provider?.custom_fields.address?.view}
                  </span>
                                <p>
                                    {provider?.custom_fields?.bio?.view}
                                </p>
                                <div className="btn-wrapper">
                                    <a
                                        href="#"
                                        className="boxed-btn"
                                    >
                                        View Profile
                                    </a>
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
