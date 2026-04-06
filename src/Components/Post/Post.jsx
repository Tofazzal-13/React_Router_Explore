import React from 'react';
import "./Post.css"
import { Link, useNavigate } from 'react-router';
const Post = ({ post }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div className='post_border'>
            <h4>UserId: {post.userId}</h4>
            <p>Title: {post.title} </p>
            <Link to={`/posts/${post.id}`}>
                <button>Submit</button>
            </Link>
            <button onClick={handleNavigate}>Details of: </button>
        </div>
    );
};

export default Post;