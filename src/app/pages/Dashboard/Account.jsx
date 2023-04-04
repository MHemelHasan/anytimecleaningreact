import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import RootURL from "../../components/Contants"

const Account = () => {
    useEffect( () => {
        const cookies = Cookies.get('api_token');
        const getUserData = async () =>{
            await fetch(RootURL + `user?api_token=${cookies}`)
                .then(res => res.json())
                .then(data => console.log(data))
        }
        getUserData();
    },[]);
    return (
        <>
            <div className="container top-margin">
                <div className="row mb-5">
                    <div className="col-md-3 sidebar">
                        <Link to={"/dashboard"}>DashBoard</Link>
                        <Link to={'/dashboard/orders'}>Orders</Link>
                        <Link to={'/dashboard/address'}>Address</Link>
                        <Link className="active" to={'/dashboard/account'}>Account Details</Link>
                        <Link>Logout</Link>
                    </div>

                    <div className="col-md-9 content">
                        <h2>Account Details</h2>
                        <p>From your account dashboard you can view your recent orders, manage your billing address, and
                            edit your password and account details.</p>

                        <div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="input1">Name</label>
                                    <input type="text" className="form-control" id="input1" aria-describedby="emailHelp"
                                           placeholder="Enter Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input2">Email address</label>
                                    <input type="email" className="form-control" id="input2"
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="input3">Phone</label>
                                    <input type="text" className="form-control" id="input3" aria-describedby="emailHelp"
                                           placeholder="Enter Phone Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="input4">Address</label>
                                    <input type="text" className="form-control" id="input4" aria-describedby="emailHelp"
                                           placeholder="Enter Address"/>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Bio</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Account;
