import React from 'react';
import './post.css';

const Post = ({post}) => {
  const PF = "http://localhost:5000/uploads/";
  return (
    <div className='post'>
      {post.photo && 
        <img className='postImage' src={PF+post.photo} alt="" />
      }
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Life</span>
                <span className='postCat'>Music</span>
            </div>
            <span className="postTitle">{post.title}</span>
            <span className="postDate">{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className="postDesc">
        {post.description}
        </p>
    </div>
  )
}

export default Post