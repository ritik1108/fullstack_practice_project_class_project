import React from 'react';
import './home.css';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import SideBar from '../../SideBar/SideBar';

const Home = () => {
  return (
    <>
        <Header />
        <div className="home">
            <Posts />
            <SideBar />
        </div>
    </>
  )
}

export default Home