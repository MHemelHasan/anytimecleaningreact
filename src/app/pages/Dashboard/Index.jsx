import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    <div className="container top-margin">
    <div className="row mb-5">
        <div className="col-md-3 sidebar">
            <Link className="active" to={"/dashboard"}>DashBoard</Link>
            <Link to={'/dashboard/orders'}>Orders</Link>
            <Link to={'/dashboard/address'}>Address</Link>
            <Link to={'/dashboard/account'}>Account Details</Link>
            <Link >Logout</Link>
        </div>

        <div className="col-md-9 content">
            <h2>Hello UserName (not UserName? Log out)</h2>
            <p>From your account dashboard you can view your recent orders, manage your billing address, and edit your password and account details.</p>
        </div>
    </div>
    </div>

    </>
  );
};

export default Dashboard;
