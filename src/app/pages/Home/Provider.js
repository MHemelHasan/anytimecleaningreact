import React from "react";

const Provider = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-32">
          Meet the <span className="text-secondary">Provider</span>
        </h2>

        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
          <div className="mb-24 md:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-75px" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-full mx-auto shadow-lg"
                    alt=""
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Marta Smith</h5>
                <p className="mb-6">Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="mb-24 md:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-75px" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    className="rounded-full mx-auto shadow-lg"
                    alt=""
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Darren Randolph</h5>
                <p className="mb-6">Marketing expert</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-75px" }}
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                    className="rounded-full mx-auto shadow-lg"
                    alt=""
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Ayat Black</h5>
                <p className="mb-6">Web designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Provider;
