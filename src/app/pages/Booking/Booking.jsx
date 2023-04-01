import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link, redirect, useParams} from "react-router-dom";

import React from "react";

import { BiArrowFromRight, BiCaretRight, BiCurrentLocation, BiFile, BiGift, BiMap } from "react-icons/bi";
import ConfirmBooking from "./ConfirmBooking";
import useBooking from "../../hooks/useBooking";

const Booking = () => {
    const { id } = useParams();
    const { booking } = useBooking(id);
    console.log("booking:",booking);

    const submitHandler = (e) =>{
        e.preventDefault()
        redirect('/confirmBooking')
    }
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


        <div className="md-m-5 p-5 bg-gray">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
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

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div>
                            <p className="text-center">Requested Service on</p>
                            <h3 className="text-center">Friday, March 31,2023</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="bg-white rounded p-3 mb-3">
                        <p><strong>Hint</strong></p>
                        <div className="d-flex">
                            <BiFile size={35}/>
                            <div className="input-group mb-3 px-3">
                            <input type="text" className="form-control" placeholder="Is there anything else you would like us..." aria-label="hint" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded p-3 mb-3">
                        <p><strong>Coupon Code</strong></p>
                        <div className="d-flex">
                            <BiGift size={35}/>
                            <div className="px-3 mt-1">
                            <input type="text" className="form-control" placeholder="COUPON" aria-label="hint" aria-describedby="basic-addon1"/>
                            </div>
                            <button className="btn btn-white px-4">Apply</button>
                        </div>
                    </div>
                </div>
                </div>

                <div className="d-grid gap-2 mt-5">
                    <button className="btn btn-orenge" type="button" onClick={submitHandler}>Continue</button>
                </div>
            </div>
        </div>

    </>);
}

export default Booking;