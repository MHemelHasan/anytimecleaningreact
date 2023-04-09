import React from "react";

import bg1 from "../../assets/uploads/media-uploader/slider1.jpeg";
import bg2 from "../../assets/uploads/media-uploader/slider2.jpeg";
import bg3 from "../../assets/uploads/media-uploader/slider3.jpeg";
import bg4 from "../../assets/uploads/media-uploader/slider1.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (

      <div className="header-slider-one">
        <div
            className="header-area header-bg"
            style={{
              backgroundImage: `url(${bg1})`
            }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <span className="subtitle">Best Cleaning Service Platform</span>
                  <h1 className="title">Quality Cleaning Service In BC, Canada</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                      <Link to={'/contact'} className="boxed-btn">
                        Contact us
                      </Link>
                    </div>
                    <span className="or">OR</span>
                    <div className="header-buttom-content style-01">
                      <p>Need Help Now? Call Us!</p>
                      <span>+1 (236) 880-1980</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            className="header-area header-bg"
            style={{
              backgroundImage: `url(${bg2})`
            }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <span className="subtitle">Best Cleaning Service Platform</span>
                  <h1 className="title">Quality Cleaning Service In BC, Canada</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                    <Link to={'/contact'} className="boxed-btn">
                        Contact us
                      </Link>
                    </div>
                    <span className="or">OR</span>
                    <div className="header-buttom-content style-01">
                      <p>Need Help Now? Call Us!</p>
                      <span>+91 458 654 528</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            className="header-area header-bg"
            style={{
              backgroundImage: `url(${bg3})`
            }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <span className="subtitle">Best Cleaning Service Platform</span>
                  <h1 className="title">Quality Cleaning Service In BC, Canada</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                    <Link to={'/contact'} className="boxed-btn">
                        Contact us
                      </Link>
                    </div>
                    <span className="or">OR</span>
                    <div className="header-buttom-content style-01">
                      <p>Need Help Now? Call Us!</p>
                      <span>+91 458 654 528</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            className="header-area header-bg"
            style={{
              backgroundImage: `url(${bg4})`
            }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <span className="subtitle">Best Cleaning Service Platform</span>
                  <h1 className="title">Quality Cleaning Service In BC, Canada</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                    <Link to={'/contact'} className="boxed-btn">
                        Contact us
                      </Link>
                    </div>
                    <span className="or">OR</span>
                    <div className="header-buttom-content style-01">
                      <p>Need Help Now? Call Us!</p>
                      <span>+91 458 654 528</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;
