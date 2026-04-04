import React from 'react';
import { useLoaderData } from 'react-router';
import "./PostDetaeils.css"

const PostDetails = () => {
    const post = useLoaderData();
    
    
    
    return (
        <div className='postDetails'>
            <h2>title: {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;