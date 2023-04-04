import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import RootURL from "../../components/Contants"
import { useReducer } from "react";

const Account = () => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        name: '',
        email: '',
        phone_number: '',
        address: '',
        bio: ''
    })

    useEffect( () => {
        const cookies = Cookies.get('api_token');
        const getUserData = async () =>{
            await fetch(RootURL + `user?api_token=${cookies}`)
                .then(res => res.json())
                .then(
                    data => {
                        setState({name:data?.data?.name})
                    }
                )
        }
        getUserData();
    },[]);

    const handleSubmit = () =>{

    }

    return (
        <>
            <div className="container top-margin">
                <div className="row mb-5">
                    <div className="col-md-3 sidebar">
                        <Link to={"/dashboard"}>Dashboard</Link>
                        <Link to={'/dashboard/orders'}>Orders</Link>
                        {/* <Link to={'/dashboard/address'}>Address</Link> */}
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
                                    <label htmlFor="input1">Name</label>
                                    <input name="name" value={user?.name} type="text" className="form-control" id="input1" aria-describedby="emailHelp"
                                           placeholder="Enter Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="input2">Email address</label>
                                    <input name="email" value={user?.email} type="email" className="form-control" id="input2"
                                           aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="input3">Phone</label>
                                    <input name="phone_number" value={user?.phone_number} type="text" className="form-control" id="input3" aria-describedby="emailHelp"
                                           placeholder="Enter Phone Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="input4">Address</label>
                                    <input name="address" value={user?.custom_fields?.address?.value} type="text" className="form-control" id="input4" aria-describedby="emailHelp"
                                           placeholder="Enter Address"/>
                                </div>
                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Bio</label>
                                    <textarea name="bio" value={user?.custom_fields?.bio?.value} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
