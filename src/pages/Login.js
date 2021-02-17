// Imports
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;

console.log(process.env.REACT_APP_SERVER_URL);
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };

        axios.post(`${REACT_APP_SERVER_URL}/api/users/login`, userData)
        .then(response => {
            const { token } = response.data;
            // Save token to localStorage
            localStorage.setItem('jwtToken', token);
            // Set token to auth header
            setAuthToken(token);
            // Decode token to get the user data
            const decoded = jwt_decode(token);
            // Set current user
            props.nowCurrentUser(decoded);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    if (props.user) return <Redirect to='/profile' />

    return (
        <div className="row mt-4 pb-5">
            <div className="col-md-7 offset-md-3 pb-5">
                <LoginCard className="card card-body">
                    <h2 className="py-2 text-center mb-5">Welcome Back</h2>
                    <div className="w-100 d-flex justify-content-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <Link>Forgot Password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </LoginCard>
            </div>
        </div>
    )
}

export default Login;

const LoginCard = styled.div`
    background: black;
    color: white;
    border-color: grey;
    box-shadow: 0 0 5px 5px rgba(200,200,200,.6);
    padding: 3rem 3rem
`