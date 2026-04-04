import React from 'react';
import "./user.css"
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone} = user;
    
    return (
        <div className='user_border'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p> {phone} </p>
            <Link to={`/users2/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;