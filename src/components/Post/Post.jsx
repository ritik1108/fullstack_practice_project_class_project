import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
        <img className='postImage' src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg" alt="" />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Life</span>
            </div>
            <span className="postTitle">Balance Life</span>
            <span className="postDate">1 hour ago...</span>
        </div>
        <p className="postDesc">
        A balanced life is one where you are able to maintain a sense of harmony and equilibrium among the different areas of your life, such as work, relationships, hobbies, health, and personal development. It means finding a way to allocate your time and energy in a way that allows you to pursue your goals and interests, while also taking care of your physical, emotional, and mental well-being.
        </p>
    </div>
  )
}

export default Post