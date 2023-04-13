import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/Context';
import './singlePost.css';
import { useLocation } from 'react-router';
import axios from 'axios';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {user} = useContext(Context);
  const PF = "http://localhost:5000/uploads/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/post/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };
    getPost();
  }, [path]);
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {
          post.photo &&
          <img className="singlePostImg" src={PF+post.photo} alt="" />
        }
        <h1 className='singlePostTitle'>{post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:<b>{post.username}</b></span>
          <span className="singlePostDate">1 hour ago...</span>
        </div>
        <p className='singlePostDesc'>
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost