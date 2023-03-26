import React from "react";

import bg1 from "../../assets/uploads/media-uploader/bg-011618830463.jpg";
import bg2 from "../../assets/uploads/media-uploader/bg-021618830463.jpg";
import bg3 from "../../assets/uploads/media-uploader/bg-011618830463.jpg";
import bg4 from "../../assets/uploads/media-uploader/bg-041618830464.jpg";

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
                  <span className="subtitle">We provide cleaning service</span>
                  <h1 className="title">We are certified cleaning Company</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                      <a href="#" className="boxed-btn">
                        Request a quote
                      </a>
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
              backgroundImage: `url(${bg2})`
            }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <span className="subtitle">We provide cleaning service</span>
                  <h1 className="title">We are certified cleaning Company</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                      <a href="#" className="boxed-btn">
                        Request a quote
                      </a>
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
                  <span className="subtitle">We provide cleaning service</span>
                  <h1 className="title">We are certified cleaning Company</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                      <a href="#" className="boxed-btn">
                        Request a quote
                      </a>
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
                  <span className="subtitle">We provide cleaning service</span>
                  <h1 className="title">We are certified cleaning Company</h1>
                  <div className="header-bottom">
                    <div className="btn-wrapper desktop-left">
                      <a href="#" className="boxed-btn">
                        Request a quote
                      </a>
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
