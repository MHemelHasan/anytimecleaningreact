import image1 from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";
import {Link, Navigate, redirect, useParams} from "react-router-dom";
import axios from "axios";
import RootURL from '../../components/Contants';
import React, { useState } from "react";
import { BiArrowFromRight, BiCaretRight, BiCurrentLocation, BiFile, BiGift, BiMap } from "react-icons/bi";
import ConfirmBooking from "../../components/Booking/ConfirmBooking";
import useBooking from "../../hooks/useBooking";
import moment from "moment/moment";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Booking = () => {
    const { id } = useParams();
    const cookies = Cookies.get('api_token');
    const [coupon,setCoupon]=useState(null);
    // const [hint,setHint]=useState(null);
    const [service,setService]=useState('');
    const [user,setUser]=useState('');
    const [showConfirm,setShowConfirm] = useState(false);
    const [messageCoupon, setMessageCoupon] = useState('');

    const [bookingData, setBookingData] = useState({
        address: {
          address: user?.custom_fields?.address.value,
          longitude: "0",
          latitude: "0",
          user_id: user?.id
        },
        e_service: id,
        options: [],
        coupon_id: 0,
        booking_status_id: 0,
        taxes: 0,
        payment_id: 0,
        booking_at: moment(),
        hint:''
      });
      console.log("bookingData",bookingData)

    useEffect(() => {
        const getUserData = async () =>{
            await fetch(RootURL + `user?api_token=${cookies}`)
            .then(res => res.json())
            .then(
                data => {
                    setUser(data?.data);
                }
            )
        }
        getUserData();

        const getService = async () =>{
        await axios.get(RootURL + `e_services${id}`, {
            headers: {
              Authorization: 'Bearer ' + cookies,
            }
          })
        .then(response => {
            setService(response.data);
          })
          .catch(error => {
            setMessage("Failed to update!");
          });
        }
        getService();
    },[coupon]);

    const getCoupons = async () =>{
        await axios.get(RootURL + `coupons`, {
            headers: {
              Authorization: 'Bearer ' + cookies,
            }
          })
        .then(response => {
            const valid_coupon = response?.data?.data.find((value, i) => {
                return value.code === coupon
              })
              setMessageCoupon(response?.data?.message);
              setBookingData({coupon_id:valid_coupon?.id})
          })
          .catch(error => {

          });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const submitHandler = (e) =>{
        setShowConfirm(true);
    }

    const handleCoupon = () =>{
        getCoupons();
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
                        <p className="pl-3">{user?.custom_fields?.address.value}</p>
                    </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div>
                            <p className="text-center">Requested Service on</p>
                            <h3 className="text-center">{moment().format('MMMM Do YYYY, h:mm a')}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="bg-white rounded p-3 mb-3">
                        <p><strong>Hint</strong></p>
                        <div className="d-flex">
                            <BiFile size={35}/>
                            <div className="input-group mb-3 px-3">
                            <input name="hint" onChange={handleInputChange} type="text" className="form-control" placeholder="Is there anything else you would like us..." aria-label="hint" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div>
                    {messageCoupon && <div className="p-3 m-3 text-white bg-success">{messageCoupon}</div>}
                    </div>
                    <div className="bg-white rounded p-3 mb-3">
                        <p><strong>Coupon Code</strong></p>
                        <div className="d-flex">
                            <BiGift size={35}/>
                            <div className="px-3 mt-1">
                            <input onChange={(e)=>setCoupon(e.target.value)} type="text" className="form-control" placeholder="COUPON" aria-label="hint" aria-describedby="basic-addon1"/>
                            </div>
                            <button onClick={handleCoupon} className="btn btn-white px-4">Apply</button>
                        </div>
                    </div>
                </div>
                </div>

                <div className="d-grid gap-2 mt-5">
                    <button className="btn btn-orenge" type="button" onClick={submitHandler}>Continue</button>
                </div>
                {showConfirm?
                <div>
                    <ConfirmBooking service={service} user={user} coupon={coupon} hint={hint} />
                </div>:""}
            </div>
        </div>

    </>);
}

export default Booking;