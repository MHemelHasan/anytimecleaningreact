import React from "react";
import Team1 from "../../../assets/uploads/media-uploader/group-1-min1620466547.png";
import Team2 from "../../../assets/uploads/media-uploader/group-2-min1620466899.png";
import Team3 from "../../../assets/uploads/media-uploader/group-3-min1620467338.png";
import Team4 from "../../../assets/uploads/media-uploader/group-5-min1620467501.png";

const Provider = () => {
  return (
    // <div className="bg-secondary container my-24 px-6 mx-auto">
    //   <section className=" mb-32 text-gray-800 text-center">
    //     <h2 className="text-3xl font-bold mb-32">
    //       Meet the <span className="text-primary">Provider</span>
    //     </h2>
    //
    //     <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
    //       <div className="mb-24 md:mb-0">
    //         <div className="rounded-lg shadow-lg h-full block bg-white">
    //           <div className="flex justify-center">
    //             <div
    //               className="flex justify-center"
    //               style={{ marginTop: "-75px" }}
    //             >
    //               <img
    //                 src="https://mdbootstrap.com/img/new/avatars/6.jpg"
    //                 className="rounded-full mx-auto shadow-lg"
    //                 alt=""
    //                 style={{ width: "150px" }}
    //               />
    //             </div>
    //           </div>
    //           <div className="p-6">
    //             <h5 className="text-lg font-bold mb-4">Marta Smith</h5>
    //             <p className="mb-6">Frontend Developer</p>
    //           </div>
    //         </div>
    //       </div>
    //
    //       <div className="mb-24 md:mb-0">
    //         <div className="rounded-lg shadow-lg h-full block bg-white">
    //           <div className="flex justify-center">
    //             <div
    //               className="flex justify-center"
    //               style={{ marginTop: "-75px" }}
    //             >
    //               <img
    //                 src="https://mdbootstrap.com/img/new/avatars/8.jpg"
    //                 className="rounded-full mx-auto shadow-lg"
    //                 alt=""
    //                 style={{ width: "150px" }}
    //               />
    //             </div>
    //           </div>
    //           <div className="p-6">
    //             <h5 className="text-lg font-bold mb-4">Darren Randolph</h5>
    //             <p className="mb-6">Marketing expert</p>
    //           </div>
    //         </div>
    //       </div>
    //
    //       <div className="">
    //         <div className="rounded-lg shadow-lg h-full block bg-white">
    //           <div className="flex justify-center">
    //             <div
    //               className="flex justify-center"
    //               style={{ marginTop: "-75px" }}
    //             >
    //               <img
    //                 src="https://mdbootstrap.com/img/new/avatars/15.jpg"
    //                 className="rounded-full mx-auto shadow-lg"
    //                 alt=""
    //                 style={{ width: "150px" }}
    //               />
    //             </div>
    //           </div>
    //           <div className="p-6">
    //             <h5 className="text-lg font-bold mb-4">Ayat Black</h5>
    //             <p className="mb-6">Web designer</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
      <section className="creative-team-area padding-top-110 padding-bottom-85">
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
                <h2 className="title">Meet Our highly expert providers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="appointment-single-item">
                <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${Team1})`
                    }}
                >
                  <div className="cat">
                    <a href="appointment-category/5/cleaners.html">Cleaners</a>
                  </div>
                </div>
                <div className="content">
                  <div className="top-part">
                    <span className="designation">Specialist</span>
                    <div className="rating-wrap">
                      <div className="ratings">
                        <span className="hide-rating"></span>
                        <span
                            className="show-rating"
                            style={{ width: "100%" }}
                        ></span>
                      </div>
                      <p>
                        <span className="total-ratings">(1)</span>
                      </p>
                    </div>
                  </div>
                  <a href="appointment/sed-perferendis-sunt/17.html">
                    <h4 className="title">Steve C. Moore</h4>
                  </a>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>Avenue Hammond, LA
                    70401
                  </span>
                  <p>
                    Turned advice the set vanity why mutual. Reasonably if
                    conviction...
                  </p>
                  <div className="btn-wrapper">
                    <a
                        href="appointment/sed-perferendis-sunt/17.html"
                        className="boxed-btn"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="appointment-single-item">
                <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${Team2})`
                    }}
                >
                  <div className="cat">
                    <a href="appointment-category/5/cleaners.html">Cleaners</a>
                  </div>
                </div>
                <div className="content">
                  <div className="top-part">
                    <span className="designation">Specialist</span>
                  </div>
                  <a href="appointment/sed-perferendis-sunt-25/28.html">
                    <h4 className="title">Brendan A. Rogers</h4>
                  </a>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>Avenue Hammond, LA
                    70401
                  </span>
                  <p>
                    Turned advice the set vanity why mutual. Reasonably if
                    conviction...
                  </p>
                  <div className="btn-wrapper">
                    <a
                        href="appointment/sed-perferendis-sunt-25/28.html"
                        className="boxed-btn"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="appointment-single-item">
                <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${Team3})`
                    }}
                >
                  <div className="cat">
                    <a href="appointment-category/5/cleaners.html">Cleaners</a>
                  </div>
                </div>
                <div className="content">
                  <div className="top-part">
                    <span className="designation">Specialist</span>
                  </div>
                  <a href="appointment/sed-perferendis-sunt-25-08/29.html">
                    <h4 className="title">Alice C. Hoyle</h4>
                  </a>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>Avenue Hammond, LA
                    70401
                  </span>
                  <p>
                    Turned advice the set vanity why mutual. Reasonably if
                    conviction...
                  </p>
                  <div className="btn-wrapper">
                    <a
                        href="appointment/sed-perferendis-sunt-25-08/29.html"
                        className="boxed-btn"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="appointment-single-item">
                <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${Team4})`
                    }}
                >
                  <div className="cat">
                    <a href="appointment-category/5/cleaners.html">Cleaners</a>
                  </div>
                </div>
                <div className="content">
                  <div className="top-part">
                    <span className="designation">Specialist</span>
                  </div>
                  <a href="appointment/sed-perferendis-sunt-25-08-18/30.html">
                    <h4 className="title">Margaret D. Hale</h4>
                  </a>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>Avenue Hammond, LA
                    70401
                  </span>
                  <p>
                    Turned advice the set vanity why mutual. Reasonably if
                    conviction...
                  </p>
                  <div className="btn-wrapper">
                    <a
                        href="appointment/sed-perferendis-sunt-25-08-18/30.html"
                        className="boxed-btn"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Provider;
