import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
import "./Posts.css"

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>All Posts: {posts.length}</h1>
            <div className='posts_border'>
                {
                   posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;