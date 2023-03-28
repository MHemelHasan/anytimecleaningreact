import React from "react";
import {Link} from "react-router-dom";
import BreadcrumbImage from "../../../assets/uploads/media-uploader/breadcrumb1619334343.png";

const Contact = () => {
    return (<>
            <div
                className="breadcrumb-area"
                style=
                    {{backgroundImage: `url(${BreadcrumbImage})`}}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner">
                                <p>Contact Us</p>
                                <h2 className="page-title">Contact Us</h2>
                                <ul className="page-list">
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-inner-area padding-bottom-120 padding-top-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="content-area">
                                <div className="section-title padding-bottom-25">
                                    <h4 className="title">
                                        We offer 24/7 emergency service to all of our customers
                                    </h4>
                                </div>
                                <div className="single-contact-item">
                                    <div className="icon">
                                        <i className="flaticon-phone"></i>
                                    </div>
                                    <div className="content">
                                        <span className="title">Phone</span>
                                        <p className="details">
                                            +458 123 657
                                            <br/>
                                            +415 103 557<br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="single-contact-item">
                                    <div className="icon">
                                        <i className="flaticon-mail-2"></i>
                                    </div>
                                    <div className="content">
                                        <span className="title">Mail US</span>
                                        <p className="details">
                                            <a
                                                href="#"
                                                className="__cf_email__"
                                                data-cfemail="72111d1c06131106320a15171c1b1d07015c111d1f"
                                            >[email&#160;protected]</a
                                            >
                                            <br/>
                                            <a
                                                href="#"
                                                className="__cf_email__"
                                                data-cfemail="e78e898188a7948f86908889c99f8082898e889294c984888a"
                                            >[email&#160;protected]</a
                                            ><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="single-contact-item">
                                    <div className="icon">
                                        <i className="flaticon-pin"></i>
                                    </div>
                                    <div className="content">
                                        <span className="title">Address </span>
                                        <p className="details">
                                            475/W 13th Street, Cooper New York, <br/>
                                            United States<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="contact-form style-01">
                                <form
                                    action="#"
                                    method="POST"
                                    className="contact-page-form style-01"
                                    id="contact_us_form"
                                >
                                    <input type="hidden" name="captcha_token" id="gcaptcha_token"/>
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value="xjc8pExQD589SXnhjNPnNrK4gqgumStBzIbSywL7"
                                    />
                                    <div className="error-message margin-bottom-20"></div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Name"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-control"
                                            placeholder="Subject"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email"
                                            required="required"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="form-group textarea">
                  <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Your Message"
                      required="required"
                  ></textarea>
                                    </div>
                                    <div className="btn-wrapper">
                                        <a
                                            href="#"
                                            className="boxed-btn btn-block"
                                            id="contact_us_submit_btn"
                                        ><span>Submit Message</span></a
                                        >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-area">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="contact_map">
                                <div className="elementor-custom-embed">
                                    <iframe
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        src="https://maps.google.com/maps?q=2626%20Angie%20Drive%20Santa%20Ana%2C%20CA%2092701&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                                        aria-label="2626 Angie Drive Santa Ana, CA 92701"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};

export default Contact;
