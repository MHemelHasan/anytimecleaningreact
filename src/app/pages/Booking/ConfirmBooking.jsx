import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link} from "react-router-dom";
import React from "react";
import {BiCurrentLocation, BiFile, BiGift, BiMap} from "react-icons/bi";

const ConfirmBooking = () => {
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
            <div className="md-m-5 p-5 bg-gray text-center">
                <div className="container text-center">
                    <div>
                        <h3>Booking Summary</h3>
                    </div>
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

                    <div className="row">
                            <div className="col-md-2 col-lg-2">Cost of service</div>
                            <div className="col-md-2 col-lg-2">$30.43</div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-lg-2">Quantity</div>
                        <div className="col-md-2 col-lg-2">x1</div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-lg-2">Maintenance</div>
                        <div className="col-md-2 col-lg-2">$2.0</div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-lg-2">Tax Amount</div>
                        <div className="col-md-2 col-lg-2">$2.0</div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 col-lg-2">Sub Amount</div>
                        <div className="col-md-2 col-lg-2">$32.43</div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-lg-2">Total Amount</div>
                        <div className="col-md-2 col-lg-2">$32.43</div>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button className="btn btn-orenge" type="button">Confirm & Book Service</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ConfirmBooking;