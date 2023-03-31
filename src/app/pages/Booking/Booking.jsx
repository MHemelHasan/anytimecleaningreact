import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link} from "react-router-dom";

import React from "react";
import img1 from "../../../assets/uploads/media-uploader/011618747632.png";
import Service_bg from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg2 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg3 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg4 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg5 from "../../../assets/uploads/media-uploader/011618730370.png";
import { AiFillCheckCircle, AiFillStar, AiOutlineCheckCircle, AiOutlineFileDone, AiOutlineLike, AiOutlineMobile, AiTwotoneCheckCircle } from "react-icons/ai";
import Provider from "../Home/Provider";
import { BiArrowFromRight, BiCaretRight, BiCurrentLocation, BiFile, BiGift, BiMap } from "react-icons/bi";

const Booking = () => {
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

        <div className="md-m-5 p-5 bg-gray">
            <div className="container">
                <div className=" bg-white p-5 rounded">
                <div className="d-flex">
                    <div className="pr-5">
                        <p>Your Address</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center bg-address rounded px-2">
                        <p className="mr-2 mb-1 fill-orenge">New</p>
                        <BiCurrentLocation size={20} style={{color:"#FFA500"}}/>
                    </div>
                </div>
                <div className="d-flex py-5">
                    <BiMap size={20}/>
                    <p className="pl-3">6590 Hand Brooks Apt. 428 Johnathonberg, MA 60603-...</p>
                </div>
                </div>
                <div className="bg-white rounded p-5 my-3">
                    <p><strong>Hint</strong></p>
                    <div className="d-flex">
                        <BiFile size={35}/>
                        <div className="input-group mb-3 pl-3">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded p-5 mb-3">
                    <p><strong>Coupon Code</strong></p>
                    <div className="d-flex">
                        <BiGift size={35}/>
                        <div className="px-2 mt-1">COUPONCODE</div>
                        <button className="btn btn-white ml-5 px-4">Apply</button>
                    </div>
                </div>
                <div className="d-grid gap-2 mt-5">
                    <button className="btn btn-orenge" type="button">Continue</button>
                </div>
            </div>
        </div>

    </>);
}

export default Booking;