'use client'

import React from 'react';
import { useState } from 'react';

const CustomForm = () => {

  const [link, setLink] = useState("");
  const [linkList, setLinkList] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setLink(value);
  }

  const handleLinkSubmit = (event) => {
    event.preventDefault();
    console.log(link);

    if(link.trim() !== '') { //Check if link is not empty
      setLinkList([...linkList, link]); //Add the link to the list
      setLink(''); //Clear input field
    } else {
      alert("Link can't be blank or have spaces on it")
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Form */}
      <form onSubmit={handleLinkSubmit} className='custom-form flex flex-col justify-center m-8 p-4 sm:py-6 gap-4 sm:gap-1 rounded-[12px] sm:flex-row sm:w-3/5'>
          <input 
              type='text' 
              onChange={handleInputChange}
              value={link}
              placeholder='Shorten a link here...'
              className='bg-white mx-8 mt-4 sm:m-2 rounded-md px-4 py-2 sm:w-full'
          />
          <button type='submit' className='mx-8 mb-4 sm:m-2 shorten-btn text-white font-bold rounded-md px-4 py-2 sm:w-1/2'>Shorten it!</button>
      </form>
      {/* Shorten links */}
      <div>
        <ul className='join join-vertical'>
          {linkList.map((item, index) => (
            <li key={index} className='join-item m-1'>
              <div className="card w-60 sm:w-80 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary">Copy!</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CustomForm