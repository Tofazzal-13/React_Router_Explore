import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user;

    const {userId} = useParams();
    console.log(userId);
    

    const UserDetailsStyle  = {
        border: "1px solid green",
        borderRadius: "10px",
    
    }

    return (
        <div>
            <h1>user details here</h1>
            <div style={UserDetailsStyle}>
                <h3>Name: {name}</h3>
                <h3>Website: {website}</h3>
            </div>
        </div>
    );
};

export default UserDetails;