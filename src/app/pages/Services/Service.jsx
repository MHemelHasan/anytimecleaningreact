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
                        <div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Deep cleaning of tracks</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Screen cleaning</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Screen repair</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Deck glass cleaning</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Removal of stickers & other construction debris</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Glass Restoration from Hard Water Stains</span></div>
                            <div><AiFillStar style={{ color: '#ffa00e' }}/><span>Glass Resurfacing (select locations only)</span></div>
                        </div>
                        <div className="py-3">
                            <button className="btn btn-info">Book Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Provider />
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5">
                        <div className="d-flex">
                            <div className=""><strong>our process </strong> </div>   
                            <div className="px-3"><AiFillStar style={{ color: '#ffa00e' }}/></div>
                            <div><hr /></div>
                        </div>
                        <div>
                            <h2 className="title font-weight-bold">How we clean windows</h2>
                            <h3 className="">Our four-step process means you’ll always get the best results.</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <div className="d-flex">
                            <div className="numbering">
                                <b>1</b>
                            </div>
                            <div>
                            One of our kilted cleaning experts thoroughly inspects your windows and notes any damage, leaks, broken glass, or other problems.

                            </div>
                        </div>
                        <div className="d-flex py-4">
                            <div className="numbering">
                                <b>2</b>
                            </div>
                            <div>
                            We clean your windows using non-abrasive materials, including mops, scrubs, and squeegees, for a streak-free shine.

                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="numbering">
                                <b>3</b>
                            </div>
                            <div>
                            We detail clean the window sill, corners, and edges.
                            </div>
                        </div>
                        <div className="d-flex py-4">
                            <div className="numbering">
                                <b>4</b>
                            </div>
                            <div>
                            We thoroughly clean-up so we leave your home even better than we found it.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <img src={Service_bg} alt="service"/>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <h1><strong>Why invest in professional window cleaning?</strong></h1>
                        <p>Part art, part science - getting a streak-free shine on your home’s windows takes know-how, the right products and tools, and maybe even a ladder. One wrong step and you could damage the glass or fall on your… backside. Trusting this important job to a novice cleaner might not be a smart move, either. All it takes is one ladder slip or misuse of tools, and you’ve got a liability on your hands. The choice, then, is clear (just like your windows will be) - you need the Men In Kilts team.
                        </p>
                        <br/>
                        <p>Cleaning the interior of your windows and screens can extend the life of your windows, protect indoor air quality, and increase your home’s energy efficiency. Ditch the DIY, sit the rookies on the bench, and discover why a kilted clean means getting high-quality, long-lasting results. </p>
                        <p class="txt-hlt v2 mt-4">Our team is ready to get to work. Reach out to us at 
                        <strong><a href="tel:(888) 292-1176"> (888) 292-1176 </a></strong>
                        today! </p>
                    </div>
                </div>

                <div className="cstm-bg rounded">
                    <div className=" row pt-5 d-flex justify-content-center">
                        <div className="d-flex align-items-center"><AiFillStar style={{ color: '#ffa00e' }}/><span className="text-white">a clear choice</span><AiFillStar style={{ color: '#ffa00e' }}/></div>
                    </div>
                    <div className="">
                        <h2 className="d-flex justify-content-center text-white pb-3 fw-600">The benefits of a squeaky clean window</h2>
                    </div>
                    <div className="row bg-white rounded mx-5">
                        <div className="col-sm-4">
                            <div class="card">
                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <AiOutlineCheckCircle size={100} style={{color:"#007bff"}} />
                                </div>
                                <div>
                                    <p class="card-text text-center pt-3">Long-term protection against cracking, etching, and scratches</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="card">
                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <AiOutlineCheckCircle size={100} style={{color:"#007bff"}} />
                                </div>
                                <div>
                                    <p class="card-text text-center pt-3">Lets more natural light into your home</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="card">
                            <div class="card-body">
                                <div className="d-flex justify-content-center">
                                    <AiOutlineCheckCircle size={100} style={{color:"#007bff"}} />
                                </div>
                                <div>
                                    <p class="card-text text-center pt-3">Better-looking windows and increased curb appeal</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center py-5 px-100">
                    <div className="">
                        <div className="py-5">
                            <h1><strong>How it works when you work with us:</strong></h1>
                        </div>
                        <div className="d-flex">
                            <div className="pr-5">
                                <AiOutlineMobile size={100}/>
                            </div>
                            <div>
                                <h3>Schedule your free estimate.</h3>
                                <p>We’ll visit your home, assess the situation and come up with the best solution for your situation.</p>
                            </div>
                        </div>
                        <div className="d-flex py-4">
                            <div className="pr-5">
                                <AiOutlineCheckCircle size={100}/>
                            </div>
                            <div>
                                <h3>Book your service.</h3>
                                <p>We’ll show up on time and be ready to work. Plus, we’ll send you updates from pre-appointment to completion so you’re always in the loop.</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="pr-5">
                                <AiOutlineLike size={100} />
                            </div>
                            <div>
                                <h3>Check our work.</h3>
                                <p>Your satisfaction is our priority. That’s why we conduct a post-service walk-through so you can make sure everything has been handled to the highest standard</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-100">
                    <button className="btn btn-info">Schedule estimate</button>
                </div>
            </div>
        </div>

    </>);
}

export default Service;