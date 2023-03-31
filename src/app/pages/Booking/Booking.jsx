import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link, redirect} from "react-router-dom";

import React from "react";

import { BiArrowFromRight, BiCaretRight, BiCurrentLocation, BiFile, BiGift, BiMap } from "react-icons/bi";
import ConfirmBooking from "./ConfirmBooking";

const Booking = () => {
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
                    <button className="btn btn-orenge" type="button" onClick={submitHandler}>Continue</button>
                </div>
            </div>
        </div>

    </>);
}

export default Booking;