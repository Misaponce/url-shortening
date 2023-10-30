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
      <form onSubmit={handleFormSubmit} className='custom-form flex flex-col justify-center m-8 p-4 sm:py-6 gap-4 sm:gap-1 rounded-[12px] sm:flex-row sm:w-3/5 shadow-xl'>
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
        <div className='join join-vertical'>
          {linkList.map((item, index) => (
            <div key={index} className='join-item mb-4'>
              <div className="w-80 sm:w-full py-2 bg-base-100 shadow-xl rounded-[10px] overflow-hidden">
                <div className="items-center sm:flex">
                  {/* Links */}
                  <div className='border-b-2 sm:border-b-0 rounded-none p-3 sm:py-1 sm:px-2 sm:mx-2 gap-2'>
                    <p className="text-base truncate">{item.longLink}</p>
                  </div>
                  {/* Button */}
                  <div className="sm:flex sm:items-center p-3 sm:py-1 sm:px-2 sm:mx-2 gap-2">
                    <p className="text-base mb-3 sm:mb-0 link link-accent">{item.shortLink}</p>
                    <button className="btn btn-primary copy-btn text-white border-none w-full sm:w-auto sm:m-1 sm:px-8"
                      onClick={handleCopy}
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomForm