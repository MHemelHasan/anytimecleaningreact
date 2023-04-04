import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import useOrders from "../../hooks/dashboard/useOrders";

const Orders = () => {
  const { orders } = useOrders();
  console.log("orders:",orders);
  return (
    <>
    <div className="container top-margin">
    <div className="row mb-5">
        <div className="col-md-3 sidebar">
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link className="active" to={'/dashboard/orders'}>Orders</Link>
            {/* <Link to={'/dashboard/address'}>Address</Link> */}
            <Link to={'/dashboard/account'}>Account Details</Link>
            <Link >Logout</Link>
        </div>

        <div className="col-md-9 content">
            <h2>Orders</h2>

            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Booking at</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Real Estate Agents</td>
                    <td>48.76</td>
                    <td>1</td>
                    <td>In Progress</td>
                    <td>20</td>
                    <td>{moment().format("DD MMMM YY")}</td>
                  </tr>
                  <tr>
                    <td>Real Estate Agents</td>
                    <td>48.76</td>
                    <td>1</td>
                    <td>In Progress</td>
                    <td>20</td>
                    <td>{moment().format("DD MMMM YY")}</td>
                  </tr>
                  <tr>
                    <td>Real Estate Agents</td>
                    <td>48.76</td>
                    <td>1</td>
                    <td>In Progress</td>
                    <td>20</td>
                    <td>{moment().format("DD MMMM YY")}</td>
                  </tr>
                  <tr>
                    <td>Real Estate Agents</td>
                    <td>48.76</td>
                    <td>1</td>
                    <td>In Progress</td>
                    <td>20</td>
                    <td>{moment().format("DD MMMM YY")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
    </div>
    </div>

    </>
  );
};

export default Orders;
