import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import "./PostDetaeils.css"

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    
    
    return (
        <div className='postDetails'>
            <h2>title: {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;