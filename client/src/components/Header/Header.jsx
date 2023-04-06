import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Unleashing the power of code, one line at a time</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImage' src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header