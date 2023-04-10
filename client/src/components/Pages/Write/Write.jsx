import React from 'react';
import './write.css';

const Write = () => {
    const user = false;
  return (
    <div className='write'>
        <img className="writeImage" src="https://images.pexels.com/photos/1420769/pexels-photo-1420769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write
