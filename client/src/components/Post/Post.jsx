import React from 'react';
import './post.css';

const Post = ({post}) => {
  return (
    <div className='post'>
      {post.photo && 
        <img className='postImage' src={post.photo} alt="" />
      }
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Life</span>
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