import React from 'react';
import './topbar.css';

const TopBar = () => {
  return (
    <div className='topContainer'>
        <div className='left'>
            <i className="fa-brands fa-linkedin topIcon"></i>
            <i className="fa-brands fa-instagram topIcon"></i>
            <i className="fa-brands fa-twitter topIcon"></i>
        </div>
        <div className='center'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
            </ul>
        </div>
        <div className='right'>
            <img className='topImage' src="https://lh3.googleusercontent.com/ogw/AAEL6siDWHMqNAV412zQRvY6QIUC67C6QNh_01UT8hT0Mg=s32-c-mo" alt="" />
            <ul className='topList'>
                <li className='topListItem'>Login</li>
                <li className='topListItem'>Register</li>
            </ul>
            <i className="fa-solid fa-magnifying-glass topSearchIcon"></i>
        </div>
    </div>
  )
}

export default TopBar