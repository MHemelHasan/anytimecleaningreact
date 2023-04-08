import image1 from '../../../assets/uploads/media-uploader/breadcrumb1619334343.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import RootURL from '../../components/Contants';
import React, { useState } from 'react';
import { BiCurrentLocation, BiFile, BiGift, BiMap } from 'react-icons/bi';
// import ConfirmBooking from '../../components/Booking/ConfirmBooking';
// import useBooking from "../../hooks/useBooking";
import moment from 'moment/moment';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Booking = () => {
  const { id } = useParams();
  const cookies = Cookies.get('api_token');
  const [coupon, setCoupon] = useState(null);
  // const [hint,setHint]=useState(null);
  const [service, setService] = useState('');
  console.log('service:', service);
  const [user, setUser] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [messageCoupon, setMessageCoupon] = useState('');
  const [errorCoupon, setErrorCoupon] = useState('');
  const [options, setOptions] = useState(null);
  console.log('options:', options);
  const [bookingStatuses, setBookingStatuses] = useState(null);
  console.log('booking status:', bookingStatuses);

  const [bookingData, setBookingData] = useState({
    address: {
      address: user?.custom_fields?.address.value,
      longitude: '0',
      latitude: '0',
      user_id: user?.id,
    },
    e_service: id,
    options: [],
    coupon_id: 0,
    booking_status_id: 0,
    taxes: 0,
    payment_id: 0,
    booking_at: moment(),
    hint: '',
  });
  console.log('bookingData', bookingData);

  useEffect(() => {
    const getUserData = async () => {
      await fetch(RootURL + `user?api_token=${cookies}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data?.data);
        });
    };
    getUserData();
    const getService = async () => {
      await axios
        .get(RootURL + `e_services${id}`, {
          headers: {
            Authorization: 'Bearer ' + cookies,
          },
        })
        .then((response) => {
          setService(response.data);
        })
        .catch((error) => {
          // setMessage("Failed to update!");
        });
    };
    getService();
    getOptions();
    getBookingStatuses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coupon, cookies, id]);

  const getCoupons = async () => {
    await axios
      .get(RootURL + `coupons`, {
        headers: {
          Authorization: 'Bearer ' + cookies,
        },
      })
      .then((response) => {
        const valid_coupon = response?.data?.data.find((value) => {
          return value.code === coupon;
        });
        if (valid_coupon) {
          setMessageCoupon('Coupon added Successfully!');
          setBookingData({ ...bookingData, coupon_id: valid_coupon?.id });
        } else {
          setErrorCoupon('Invalid Coupon!');
        }
      })
      .catch((error) => {});
  };

  const getOptions = async () => {
    await axios
      .get(RootURL + `options`, {
        headers: {
          Authorization: 'Bearer ' + cookies,
        },
      })
      .then((response) => {
        setOptions(response?.data?.data);
      })
      .catch((error) => {});
  };

  const getBookingStatuses = async () => {
    await axios
      .get(RootURL + `booking_statuses`, {
        headers: {
          Authorization: 'Bearer ' + cookies,
        },
      })
      .then((response) => {
        setBookingStatuses(response?.data?.data);
      })
      .catch((error) => {});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const submitHandler = (e) => {
    setShowConfirm(true);
  };

  const handleCoupon = () => {
    getCoupons();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageCoupon('');
      setErrorCoupon('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [messageCoupon, errorCoupon]);

  return (
    <>
      <div
        className='breadcrumb-area'
        style={{ backgroundImage: `url(${image1})` }}
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
                  <li>{service?.name?.en}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md-m-5 md-p-5 bg-gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className=' bg-white p-5 rounded'>
                <div className='d-flex'>
                  <div className='pr-5'>
                    <p>Your Address</p>
                  </div>
                  <div className='d-flex justify-content-between align-items-center bg-address rounded px-2'>
                    <p className='mr-2 mb-1 fill-orenge'>New</p>
                    <BiCurrentLocation size={20} style={{ color: '#FFA500' }} />
                  </div>
                </div>
                <div className='d-flex py-5'>
                  <BiMap size={20} />
                  <p className='pl-3'>{user?.custom_fields?.address.value}</p>
                </div>
              </div>

              <div className='d-flex justify-content-center align-items-center mt-3'>
                <div>
                  <p className='text-center'>Requested Service on</p>
                  <h3 className='text-center'>
                    {moment().format('MMMM Do YYYY, h:mm a')}
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='bg-white rounded p-3 mb-3'>
                <p>
                  <strong>Hint</strong>
                </p>
                <div className='d-flex'>
                  <BiFile size={35} />
                  <div className='input-group mb-3 px-3'>
                    <input
                      name='hint'
                      onChange={handleInputChange}
                      type='text'
                      className='form-control'
                      placeholder='Is there anything else you would like us...'
                      aria-label='hint'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                </div>
              </div>
              <div>
                {messageCoupon && (
                  <div className='p-3 m-3 text-white bg-success'>
                    {messageCoupon}
                  </div>
                )}
                {errorCoupon && (
                  <div className='p-3 m-3 text-white bg-danger'>
                    {errorCoupon}
                  </div>
                )}
              </div>
              <div className='bg-white rounded p-3 mb-3'>
                <p>
                  <strong>Coupon Code</strong>
                </p>
                <div className='d-flex'>
                  <BiGift size={35} />
                  <div className='px-3 mt-1'>
                    <input
                      onChange={(e) => setCoupon(e.target.value)}
                      type='text'
                      className='form-control'
                      placeholder='COUPON'
                      aria-label='hint'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <button onClick={handleCoupon} className='btn btn-white px-4'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className='container'>
            <div className='d-flex justify-content-center my-5'>
              <button
                className='btn btn-orenge'
                type='button'
                onClick={submitHandler}
              >
                Continue
              </button>
            </div>
          </div>

          </div>


          {showConfirm ? (
            <div>
              <div className='md-m-5 p-5 bg-gray text-center'>
                <div className='text-center'>
                  <div>
                    <h3>Booking Summary</h3>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Cost of service</div>
                    <div className='col-md-2 col-lg-2'>{service?.price}</div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Discount Price</div>
                    <div className='col-md-2 col-lg-2'>
                      {service?.discount_price}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Quantity</div>
                    <div className='col-md-2 col-lg-2'>x1</div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Maintenance</div>
                    <div className='col-md-2 col-lg-2'>$2.0</div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Tax Amount</div>
                    <div className='col-md-2 col-lg-2'>$2.0</div>
                  </div>

                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Sub Amount</div>
                    <div className='col-md-2 col-lg-2'>$32.43</div>
                  </div>
                  <div className='row'>
                    <div className='col-md-2 col-lg-2'>Total Amount</div>
                    <div className='col-md-2 col-lg-2'>$32.43</div>
                  </div>
                  <div className='container'>
                    <div className='d-flex justify-content-center my-5'>
                      <button className='btn btn-orenge' type='button'>
                        Confirm & Book Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
