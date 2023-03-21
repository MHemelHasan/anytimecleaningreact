import React from "react";

const CheckoutForm = () => {
  return (
    <section className="px-8 md:px-20 mx-auto my-10">
      <h1 className="sr-only">Checkout</h1>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <h2 className="font-medium text-gray-900">Lorem</h2>
            </div>

            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <li className="flex items-center gap-4 py-4">
                    <img
                      src=""
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">Basic Service</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Quantity:</dt>
                          <dd className="inline">1</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 py-4">
                    <img
                      src=""
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">Massage Service</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt className="inline">Quantity:</dt>
                          <dd className="inline">1</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  for="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label
                  for="LastName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Phone"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div className="mb-3">
                    <label for="CardNumber" className="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="px-2 py-2 relative mt-1 w-full rounded-t-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label for="CardExpiry" className="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="px-2 py-2 relative w-full rounded-bl-md border-collapse border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                      />
                    </div>

                    <div className="flex-1">
                      <label for="CardCVC" className="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="px-2 py-2 relative w-full rounded-br-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div className="mb-3">
                    <label for="Country" className="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      className="px-2 py-2 relative w-full rounded-t-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>{" "}
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full rounded-md bg-action-color p-2.5 text-sm font-medium text-black transition hover:shadow-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
