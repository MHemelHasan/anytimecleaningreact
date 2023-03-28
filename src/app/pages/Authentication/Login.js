import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import RootURL from '../../components/Contants';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        await fetch(RootURL + 'login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password,})
        }).then(response => console.log(response))
    }
    return (
        <div className="login">
            <div className="container-fluid h-100 custom">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-md-4 login-form">
                        <h2 className="text-center">Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Email">Email:</label>
                                <input type="text" className="form-control" name="email" id="email"
                                       placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mx-auto"
                                        onClick={submitHandler}>Submit
                                </button>
                            </div>
                        </form>
                        <p className="text-center m-4">Don't have an account? <Link to="/user-signup"
                                                                                    style={{color: "blue"}}>Register</Link>
                        </p>
                        <p className="text-center">Provider? <a href="https://api.anytimecleaning.net/public/login">Login here.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login;
