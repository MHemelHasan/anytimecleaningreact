/* eslint-disable jsx-a11y/anchor-is-valid */
import img1 from "../../../assets/uploads/media-uploader/011618747632.png";
import Service_bg from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg2 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg3 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg4 from "../../../assets/uploads/media-uploader/011618730370.png";
import Service_bg5 from "../../../assets/uploads/media-uploader/011618730370.png";
import Icon_bg1 from "../../../assets/frontend/important/choose/01.png";
import Icon_bg2 from "../../../assets/frontend/important/choose/01.png";
import Image1 from "../../../assets/uploads/media-uploader/bg-min-service1618907068.png";
import Image2 from "../../../assets/uploads/media-uploader/bg-right1618906912.jpg";
import Testimonial from "../../../assets/uploads/media-uploader/testimonial-011618929870.png";
import Testimonial2 from "../../../assets/uploads/media-uploader/testimonial-021618929870.png";
import Testimonial3 from "../../../assets/uploads/media-uploader/testimonial-031618930158.png";
import Testimonial4 from "../../../assets/uploads/media-uploader/testimonial-bg1618991543.png";
import Image3 from "../../../assets/uploads/media-uploader/021618991591.png";
import ContactImage from "../../../assets/uploads/media-uploader/011618994172.png";
import PostImage1 from "../../../assets/uploads/media-uploader/pexels-karolina-grabowska-4239146-min1620223752.jpg";
import PostImage2 from "../../../assets/uploads/media-uploader/pexels-karolina-grabowska-4239032-min1620225734.jpg";
import PostImage3 from "../../../assets/uploads/media-uploader/pexels-karolina-grabowska-4239113-min1620225894.jpg";
import service1 from "../../../assets/uploads/media-uploader/service1.png";
import service2 from "../../../assets/uploads/media-uploader/service2.jpg";
import service3 from "../../../assets/uploads/media-uploader/service3.jpg";
import service4 from "../../../assets/uploads/media-uploader/service2.jpg";
import service5 from "../../../assets/uploads/media-uploader/bg-right1618906912.jpg";


import Banner from "../../components/Banner";
import Provider from "./Provider";

const Home = () => {
  return (
    <>
      <Banner />
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
                            <h4 className="title">Window Cleaning</h4>
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
                            <h4 className="title">Gutter Cleaning</h4>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link service-item-list show"
                          id="vehicle-service-tab"
                          data-toggle="tab"
                          href="#vehicle-service"
                          role="tab"
                          aria-controls="vehicle-service"
                          aria-selected="true"
                        >
                          <div className="service-icon style-01">
                            <i className="flaticon-lawn-mower"></i>
                          </div>
                          <div className="service-title">
                            <h4 className="title">House Washing</h4>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link service-item-list show"
                          id="institutional-service-tab"
                          data-toggle="tab"
                          href="#institutional-service"
                          role="tab"
                          aria-controls="institutional-service"
                          aria-selected="true"
                        >
                          <div className="service-icon style-01">
                            <i className="flaticon-wash-1"></i>
                          </div>
                          <div className="service-title">
                            <h4 className="title">Exterior Building Washing</h4>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link service-item-list show"
                          id="others-service-tab"
                          data-toggle="tab"
                          href="#others-service"
                          role="tab"
                          aria-controls="others-service"
                          aria-selected="true"
                        >
                          <div className="service-icon style-01">
                            <i className="flaticon-washing-hands"></i>
                          </div>
                          <div className="service-title">
                            <h4 className="title">Pressure Washing</h4>
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
                              <h3 className="title">
                                We provide best residential cleaning service
                              </h3>
                              <p>
                                We're known for one thing everywhere we go:
                                excellent customer experiences. With our
                                industry leading guarantees and our unwavering.
                              </p>
                            </div>
                            <div className="content">
                              <ul>
                                <div className="row">
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="serivce-bg"
                            style={{
                              backgroundImage: `url(${service1})`
                            }}
                          ></div>
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
                              <h3 className="title">
                                We provide best residential cleaning service
                              </h3>
                              <p>
                                We're known for one thing everywhere we go:
                                excellent customer experiences. With our
                                industry leading guarantees and our unwavering.
                              </p>
                            </div>
                            <div className="content">
                              <ul>
                                <div className="row">
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="serivce-bg"
                            style={{
                              backgroundImage: `url(${Service_bg})`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="vehicle-service"
                        role="tabpanel"
                        aria-labelledby="vehicle-service-tab"
                      >
                        <div className="description-tab-content">
                          <div className="text-content-tab">
                            <div className="section-title">
                              <span className="subtitle">Vehicle Service</span>
                              <h3 className="title">
                                We provide best residential cleaning service
                              </h3>
                              <p>
                                We're known for one thing everywhere we go:
                                excellent customer experiences. With our
                                industry leading guarantees and our unwavering.
                              </p>
                            </div>
                            <div className="content">
                              <ul>
                                <div className="row">
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="serivce-bg"
                            style={{
                              backgroundImage: `url(${service3})`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="institutional-service"
                        role="tabpanel"
                        aria-labelledby="institutional-service-tab"
                      >
                        <div className="description-tab-content">
                          <div className="text-content-tab">
                            <div className="section-title">
                              <span className="subtitle">
                              Commercial Service
                              </span>
                              <h3 className="title">
                                We provide best residential cleaning service
                              </h3>
                              <p>
                                We're known for one thing everywhere we go:
                                excellent customer experiences. With our
                                industry leading guarantees and our unwavering.
                              </p>
                            </div>
                            <div className="content">
                              <ul>
                                <div className="row">
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="serivce-bg"
                            style={{
                              backgroundImage: `url(${service4})`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="others-service"
                        role="tabpanel"
                        aria-labelledby="others-service-tab"
                      >
                        <div className="description-tab-content">
                          <div className="text-content-tab">
                            <div className="section-title">
                              <span className="subtitle">Others Service</span>
                              <h3 className="title">
                                We provide best residential cleaning service
                              </h3>
                              <p>
                                We're known for one thing everywhere we go
                                excellent customer experiences. With our
                                industry-leading guarantees and our unwavering.
                              </p>
                            </div>
                            <div className="content">
                              <ul>
                                <div className="row">
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Kitchen
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bathrooms
                                    </li>
                                  </div>
                                  <div className="col-md-6">
                                    <li>
                                      <i className="fas fa-check"></i> Bedrooms
                                    </li>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="serivce-bg"
                            style={{
                              backgroundImage: `url(${service5})`
                            }}
                          ></div>
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
      <section className="why-choose-use-area padding-top-110 padding-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-sm-12 col-12">
              <div className="section-title desktop-center margin-bottom-55">
                <div className="icon">
                  <span className="line-one"></span>
                  <span className="line-two"></span>
                  <i className="flaticon-paint-brush"></i>
                  <span className="line-three"></span>
                  <span className="line-four"></span>
                </div>
                <h2 className="title">Why choose us?</h2>
                <p>
                  We&#039;re known for one thing everywhere we go excellent
                  customer experiences. With our industry-leading guarantees and
                  our unwavering.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="choose-single-item margin-bottom-30 bg-image">
                <div
                  className="icon bg-image"
                  style={{
                    backgroundImage: `url(${Icon_bg1})`
                  }}
                >
                  <i className="flaticon-handwash"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="service/cyber-security/1.html">
                    We Provide Experienced Cleaners
                    </a>
                  </h4>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="choose-single-item margin-bottom-30 bg-image active">
                <div
                  className="icon bg-image"
                  style={{
                    backgroundImage: `url(${Icon_bg2})`
                  }}
                >
                  <i className="flaticon-design"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="service/over-200-complete-task/8.html">
                      Over 200+ Complete Task
                    </a>
                  </h4>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="choose-single-item margin-bottom-30 bg-image">
                <div
                  className="icon bg-image"
                  style={{
                    backgroundImage: `url(${Icon_bg1})`
                  }}
                >
                  <i className="flaticon-admin"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="service/over-200-complete-task/9.html">
                      100% Clients Satisfaction
                    </a>
                  </h4>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="choose-single-item margin-bottom-30 bg-image">
                <div
                  className="icon bg-image"
                  style={{
                    backgroundImage: `url(${Icon_bg1})`
                  }}
                >
                  <i className="flaticon-compass"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="service/over-200-complete-task/10.html">
                      Global cleaning service
                    </a>
                  </h4>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="eco-friendly-area padding-top-180 padding-bottom-227">
        <div
          className="bg-img-01 bg-blue"
          style={{
            backgroundImage: `url(${Image1})`
          }}
        ></div>
        <div
          className="bg-img-02 home"
          style={{
            backgroundImage: `url(${Image2})`
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="eco-content">
                <div className="section-title white">
                  <div className="icon">
                    <i className="flaticon-paint-brush"></i>
                    <span className="line-three"></span>
                    <span className="line-four"></span>
                  </div>
                  <h3 className="title">
                    Cleaning with Care and Eco-Friendly Products
                  </h3>
                  <p>
                    We&#039;re known for one thing everywhere we go: excellent
                    customer experiences. With our industry leading guarantees
                    and our unwavering.
                  </p>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i> Experienced Team
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Keep the same cleaner for
                      every visit
                    </li>
                    <li>
                      <i className="fas fa-check"></i> One-off, weekly or
                      fortnightly visits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="we-available">
                <p>
                  We&#039;re known for one thing everywhere we go excellent
                  customer experiences. With our industry leading guarantees and
                  our unwavering.
                </p>
                <div className="available-item">
                  <div className="icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="content">
                    <span>We are 24/7 available</span>
                    <p>+1 (236) 880-1980</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counterup-area">
        <div className="container">
          <div className="counterup-wrapper m-top bg-liteblue">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-counterup-01">
                  <div className="icon">
                    <i className="flaticon-handwash"></i>
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="count-num">5</span>k+
                    </div>
                    <h4 className="title">Worldwide Clients</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-counterup-01">
                  <div className="icon">
                    <i className="flaticon-wipe"></i>
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="count-num">7,079</span>+
                    </div>
                    <h4 className="title">Store Clients Products</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-counterup-01">
                  <div className="icon">
                    <i className="flaticon-dust-pan-1"></i>
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="count-num">500</span>+
                    </div>
                    <h4 className="title">Total Km Reach So Far</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="testimonial-area bg-image padding-top-110 padding-bottom-120">
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
                <h2 className="title">What Clients Say</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-carousel-area">
                <div className="testimonial-carousel">
                  <div className="single-testimonial-item">
                    <div
                      className="thumb bg-image"
                      style={{
                        backgroundImage: `url(${Testimonial})`
                      }}
                    ></div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-quote-left"></i>
                      </div>
                      <p className="description">
                      Top quality, on time and best in class cleaning service in canada. We have already recommended them to many of our known ones and everyone is in love with them.
                      </p>
                      <div className="author-details">
                        <div className="author-meta">
                          <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <h4 className="title">- Donald Moreau</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-item">
                    <div
                      className="thumb bg-image"
                      style={{
                        backgroundImage: `url(${Testimonial2})`
                      }}
                    ></div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-quote-left"></i>
                      </div>
                      <p className="description">
                      They did a great job. Everywhere is clean and shiny again. Their price was reasonable too They won't leave unless you are satisfied with the job.
I certainly recommend their service for cleaning.
                      </p>
                      <div className="author-details">
                        <div className="author-meta">
                          <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <h4 className="title">- James Curtiss</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-item">
                    <div
                      className="thumb bg-image"
                      style={{
                        backgroundImage: `url(${Testimonial3})`
                      }}
                    ></div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-quote-left"></i>
                      </div>
                      <p className="description">
                      I am delighted with the service, super immediately for any emergency I will definitely request them again!!!

                      </p>
                      <div className="author-details">
                        <div className="author-meta">
                          <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <h4 className="title">- Steven Perkins</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="contact-area bg-image padding-top-110 padding-bottom-120"
        style={{
          backgroundImage: `url(${Testimonial4})`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-img bg-image">
                <img src={ContactImage} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="request-page-form-wrap">
                <div
                  className="section-title bg-image"
                  style={{
                    backgroundImage: `url(${Image3})`
                  }}
                >
                  <h4 className="title">Get a Quote</h4>
                  <p>Fill the form now</p>
                </div>
                <form
                  action=""
                  method="POST"
                  className="request-page-form"
                  encType="multipart/form-data"
                  id="quote_form"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="xjc8pExQD589SXnhjNPnNrK4gqgumStBzIbSywL7"
                  />
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group textarea">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    name="captcha_token"
                    id="gcaptcha_token"
                  />
                  <div className="form-group">
                    <input
                      type="submit"
                      id="quote_submit_btn"
                      value="Submit Request"
                      className="submit-btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Provider />
      <section className="blog-area padding-top-110 padding-bottom-100 bg-liteblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-title-content margin-bottom-45">
                <div className="section-title">
                  <div className="icon">
                    <i className="flaticon-paint-brush"></i>
                    <span className="line-three"></span>
                    <span className="line-four"></span>
                  </div>
                  <h3 className="title">Latest News &amp; Tips</h3>
                </div>
                <div className="btn-wrapper">
                  <a href="blog.html" className="boxed-btn">
                    See All News
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-blog-grid-01 margin-bottom-30">
                <div className="thumb">
                  <img src={PostImage1} alt="post1" />
                  <div className="news-date">
                    <h5 className="title">24</h5>
                    <span>Apr</span>
                  </div>
                </div>
                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <i className="far fa-user"></i> Shawon
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i> 1 year ago
                    </li>
                  </ul>
                  <h4 className="title">
                    <a href="blog/healthy-life-is-clean-life/5.html">
                      A healthy life is a clean life for everyone
                    </a>
                  </h4>
                  <p>
                    What the world would be like if food processors didn't
                    exist. 13 uses for chef uniforms. What the Beatles could
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-blog-grid-01 margin-bottom-30">
                <div className="thumb">
                  <img src={PostImage2} alt="post2" />
                  <div className="news-date">
                    <h5 className="title">24</h5>
                    <span>Apr</span>
                  </div>
                </div>
                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <i className="far fa-user"></i> Shawon
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i> 1 year ago
                    </li>
                  </ul>
                  <h4 className="title">
                    <a href="blog/cleaning-are-best-business-for-future/4.html">
                      Cleaning are best business for future
                    </a>
                  </h4>
                  <p>
                    What the world would be like if food processors didn't
                    exist. 13 uses for chef uniforms. What the Beatles could
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-blog-grid-01 margin-bottom-30">
                <div className="thumb">
                  <img src={PostImage3} alt="post3" />
                  <div className="news-date">
                    <h5 className="title">22</h5>
                    <span>Apr</span>
                  </div>
                </div>
                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <i className="far fa-user"></i> Shawon
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i> 1 year ago
                    </li>
                  </ul>
                  <h4 className="title">
                    <a href="blog/how-to-make-your-life-so-clean222/3.html">
                      How to make your life so clean
                    </a>
                  </h4>
                  <p>
                    What the world would be like if food processors didn't
                    exist. 13 uses for chef uniforms. What the Beatles could
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="back-to-top">
        <span className="back-top">
          <i className="fa fa-angle-up"></i>
        </span>
      </div>

    </>
  );
};

export default Home;
