import React, {useState, useEffect} from 'react';
import './home.css';
import Header from '../../Header/Header';
import axios from "axios";
import Posts from '../../Posts/Posts';
import SideBar from '../../SideBar/SideBar';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  console.log(posts)
  return (
    <>
        <Header />
        <div className="home">
            <Posts post={posts}/>
            <SideBar />
        </div>
    </>
  )
}

export default Home