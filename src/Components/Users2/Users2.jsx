import React, { use } from 'react';
import User from '../User/User';
import "./Users2.css"

const Users2 = ({usersPromise}) => {
    
    const users = use(usersPromise)

    
    return (
        <div>
            <h2>This is users 2 component</h2>
            <div className='users2_border'>
                {
                   users.map(user => <User key={user.id} user={user}></User>)  
                }
            </div>
        </div>
    );
};

export default Users2;