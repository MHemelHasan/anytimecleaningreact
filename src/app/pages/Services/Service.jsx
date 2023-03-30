import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link} from "react-router-dom";

import React from "react";
import img1 from "../../../assets/uploads/media-uploader/011618747632.png";
import Service_bg from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg2 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg3 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg4 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg5 from "../../../assets/uploads/media-uploader/011618730370.png";

const Service = () => {
    return (<>
        <div
            className='breadcrumb-area'
            style={{backgroundImage: `url(${image1})`}}
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='breadcrumb-inner'>
                            <p>Services</p>
                            <h2 className='page-title'>Services</h2>
                            <ul className='page-list'>
                                <li>
                                    <Link to='/home'>Home</Link>
                                </li>
                                <li>Services</li>
                                <li>Residential Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="header-bottom-area bg-blue-03 bg-image padding-bottom-80"
            style={{
                backgroundImage: `url(
           ${img1}
          )`
            }}
        >
            <div className="container">
                <div className="header-bottom-wrapper m-top bg-white">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-wrapper">
                                <div className="left-content bg-blue">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active service-item-list show"
                                                id="residential-service-tab"
                                                data-toggle="tab"
                                                href="#residential-service"
                                                role="tab"
                                                aria-controls="residential-service"
                                                aria-selected="true"
                                            >
                                                <div className="service-icon style-01">
                                                    <i className="flaticon-vacuum"></i>
                                                </div>
                                                <div className="service-title">
                                                    <h4 className="title">Residential Service</h4>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link service-item-list show"
                                                id="commercial-service-tab"
                                                data-toggle="tab"
                                                href="#commercial-service"
                                                role="tab"
                                                aria-controls="commercial-service"
                                                aria-selected="true"
                                            >
                                                <div className="service-icon style-01">
                                                    <i className="flaticon-liquid-soap"></i>
                                                </div>
                                                <div className="service-title">
                                                    <h4 className="title">Commercial Service</h4>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-content">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade active show"
                                            id="residential-service"
                                            role="tabpanel"
                                            aria-labelledby="residential-service-tab"
                                        >
                                            <div className="description-tab-content">
                                                <div className="text-content-tab">
                                                    <div className="section-title">
                              <span className="subtitle">
                                Residential Service
                              </span>

                                                    </div>
                                                    <div className="content">
                                                        <ul>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <li>
                                                                        <i className="fas fa-check"></i> Kitchen
                                                                    </li>
                                                                </div>

                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="commercial-service"
                                            role="tabpanel"
                                            aria-labelledby="commercial-service-tab"
                                        >
                                            <div className="description-tab-content">
                                                <div className="text-content-tab">
                                                    <div className="section-title">
                              <span className="subtitle">
                                Commercial Service
                              </span>

                                                    </div>
                                                    <div className="content">
                                                        <ul>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <li>
                                                                        <i className="fas fa-check"></i> Kitchen
                                                                    </li>
                                                                </div>

                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="m-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <img src={Service_bg} alt="service"/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <h1><strong>Home window cleaning</strong></h1>
                        <h3>We raise the bar so you don’t have to</h3>
                        <p>Window cleaning may look like an art, but it’s a science. And like most scientific pursuits,
                            the
                            difference between amazing results and unmitigated disasters is a lot of know-how and a
                            little
                            elbow grease.</p>
                        <br/>
                        <p>Men In Kilts’s home window cleaning experts are armed with both. Not only are they equipped
                            with
                            top-of-the-line tools and proprietary cleaning products, but they also know how to use those
                            tools and products in a way that will give your home the best results.</p>
                        <br/>
                        <p>That means sparkling windows that don’t just look good – they’ll be better protected against
                            scratches and cracks and able to add some natural light into your home.</p>
                        <p><strong>Our home window cleaning company also offers the following services:</strong></p>
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default Service;