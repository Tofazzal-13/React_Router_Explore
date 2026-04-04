import React from 'react';
import "./Post.css"
import { Link } from 'react-router';
const Post = ({ post }) => {
    return (
        <div className='post_border'>
            <h4>UserId: {post.userId}</h4>
            <p>Title: {post.title} </p>
            <Link to={`/posts/${post.id}`}>
                <button>Submit</button>
            </Link>
        </div>
    );
};

export default Post;