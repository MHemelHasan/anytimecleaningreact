import React from "react";

const CheckoutForm = () => {
  return (
    <section className="px-8 md:px-20 mx-auto my-10">
      <h1 class="sr-only">Checkout</h1>
      <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div class="bg-gray-50 py-12 md:py-24">
          <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div class="flex items-center gap-4">
              <h2 class="font-medium text-gray-900">Lorem</h2>
            </div>

            <div>
              <p class="text-2xl font-medium tracking-tight text-gray-900">
                $99.99
              </p>

              <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
            </div>

            <div>
              <div class="flow-root">
                <ul class="-my-4 divide-y divide-gray-100">
                  <li class="flex items-center gap-4 py-4">
                    <img src="" alt="" class="h-16 w-16 rounded object-cover" />

                    <div>
                      <h3 class="text-sm text-gray-900">Basic Service</h3>

                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Quantity:</dt>
                          <dd class="inline">1</dd>
                        </div>
                      </dl>
                    </div>
                  </li>

                  <li class="flex items-center gap-4 py-4">
                    <img src="" alt="" class="h-16 w-16 rounded object-cover" />

                    <div>
                      <h3 class="text-sm text-gray-900">Massage Service</h3>

                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Quantity:</dt>
                          <dd class="inline">1</dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white py-12 md:py-24">
          <div class="mx-auto max-w-lg px-4 lg:px-8">
            <form class="grid grid-cols-6 gap-4">
              <div class="col-span-3">
                <label
                  for="FirstName"
                  class="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  class="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div class="col-span-3">
                <label
                  for="LastName"
                  class="block text-xs font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  class="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="Email"
                  class="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  class="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="Phone"
                  class="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  class="mt-1 px-2 py-2 w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                />
              </div>

              <fieldset class="col-span-6">
                <legend class="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div className="mb-3">
                    <label for="CardNumber" class="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      class="px-2 py-2 relative mt-1 w-full rounded-t-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                    />
                  </div>

                  <div class="flex -space-x-px">
                    <div class="flex-1">
                      <label for="CardExpiry" class="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        class="px-2 py-2 relative w-full rounded-bl-md border-collapse border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                      />
                    </div>

                    <div class="flex-1">
                      <label for="CardCVC" class="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        class="px-2 py-2 relative w-full rounded-br-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset class="col-span-6">
                <legend class="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div className="mb-3">
                    <label for="Country" class="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      class="px-2 py-2 relative w-full rounded-t-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  {/*        <div>
                    <label class="sr-only" for="PostalCode">
                      {" "}
                      ZIP/Post Code{" "}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      class="px-2 relative w-full rounded-b-md border border-gray-300 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparen sm:text-sm"
                    />
                  </div> */}
                </div>
              </fieldset>

              <div class="col-span-6">
                <button class="block w-full rounded-md bg-primary p-2.5 text-sm text-white transition hover:shadow-lg">
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