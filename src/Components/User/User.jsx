import React, { Suspense, useState } from 'react';
import "./user.css"
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo]= useState(false)
    const {id,name,email,phone} = user;
    
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    return (
        <div className='user_border'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p> {phone} </p>
            <Link to={`/users2/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide" : "Detail"} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading..</span>}>
                    <UserDetails2 userPromise={userPromise} ></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;