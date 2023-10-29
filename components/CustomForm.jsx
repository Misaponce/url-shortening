'use client'

import React from 'react';
import { useState } from 'react';
import { shortenURL } from '../api/httpClient';

const CustomForm = () => {
  
  const [inputURL, setInputUrl] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [linkList, setLinkList] = useState([]);
  const [buttonText, setButtonText] = useState('Copy!')

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setInputUrl('');
    console.log(inputURL);

    try {
      const shortLink = await shortenURL(inputURL);

      const linkObject = {
        longLink: inputURL,
        shortLink: shortLink,
      }
      
      setLinkList([...linkList, linkObject]);
      setShortLink(shortLink);
    } catch (error) {
      console.error(error);
    }

  };

  //Catching user input link
  const handleInputChange = (e) => {
    setInputUrl(e.target.value)
  }

  // Handling Link Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(shortLink);
    setButtonText('Copied!')
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Form */}
      <form onSubmit={handleFormSubmit} className='custom-form flex flex-col justify-center m-8 p-4 sm:py-6 gap-4 sm:gap-1 rounded-[12px] sm:flex-row sm:w-3/5'>
          <input 
              type='text' 
              value={inputURL}
              onChange={handleInputChange}
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
              <div className="card w-80 sm:min-w-80 bg-base-100 shadow-xl overflow-hidden">
                <div className="card-body items-center text-center">
                  <p className="text-sm truncate">{item.longLink}</p>
                  <p className="text-base">{item.shortLink}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary"
                      onClick={handleCopy}
                    >
                      {buttonText}
                    </button>
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