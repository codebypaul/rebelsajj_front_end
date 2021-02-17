// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [DOB, setDOB] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleDOB = (e) => {
        setDOB(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { firstName, lastName, email, DOB, password };
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to='/login' />
    return (
        <div className="row my-4 pb-5">
            <div className="col-md-7 offset-md-3 pb-5">
                <SignUpCard className="card card-body my-3">
                    <h2 className="py-2 text-center">Signup</h2>
                    <div className="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="First Name" value={firstName} onChange={handleFirstName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input type="text" name="Last Name" value={lastName} onChange={handleLastName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Date of Birth</label>
                            <input type="date" name="dob" value={DOB} onChange={handleDOB} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </SignUpCard>
            </div>
        </div>
    )
}

export default Signup;

const SignUpCard = styled.div`
    background: black;
    color: white;
    border-color: grey;
    box-shadow: 0 0 5px 5px rgba(200,200,200,.5);
    padding: 3rem 4rem;
`