import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
    <div className="container top-margin">
    <div className="row">
        <div class="col-md-3 sidebar">
            <Link to={"/dashboard"}>DashBoard</Link>
            <Link class="active" to={'/dashboard/orders'}>Orders</Link>
            <Link to={'/dashboard/address'}>Address</Link>
            <Link to={'/dashboard/account'}>Account Details</Link>
            <Link >Logout</Link>
        </div>

        <div class="col-md-9 content">
            <h2>Orders</h2>
            <p>From your account dashboard you can view your recent orders, manage your billing address, and edit your password and account details.</p>
        </div>
    </div>
    </div>

    </>
  );
};

export default Orders;
