import React from 'react';
import Post from '../Post/Post';
import './posts.css';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts?.map((p) => (
        <Post post={p} key={p._id} />
      ))}
    </div>
  )
}

export default Posts