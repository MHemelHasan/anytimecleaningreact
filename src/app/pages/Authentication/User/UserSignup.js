import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/company-logo.png";
import "../Login.css";

const UserSignup = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-24 sm:px-6 lg:px-8 login">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-40 w-auto" src={Logo} alt="logo" />
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Sign up as <span className="text-secondary">Customer</span>
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="fullName"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="confirmPassword"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 focus:ring-0 focus:outline-none text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 font-medium"
                >
                  I agree to the terms
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-black border-2 border-primary bg-action-color hover:bg-action-color focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Signup
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-base font-semibold mb-0">
              Already have an account?{" "}
              <Link
                className="text-action-color font-bold hover:black focus:text-black transition duration-200 ease-in-out"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
