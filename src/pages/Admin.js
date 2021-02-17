import React from 'react';
import { Link } from 'react-router-dom';

const Admin = (props) => {
    console.log(props.user);
    const userData = props.user ? 
    (<div>
        <h1>Admin</h1>
        <p><strong>Name:</strong> {props.user.firstName} {props.user.lastName}</p> 
        <p><strong>Member Since:</strong> {props.user.id}</p> 
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Admin;