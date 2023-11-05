'use client'

import React from 'react';
import { useState } from 'react';
import { shortenURL } from '../api/httpClient';

const CustomForm = () => {
  
  const [inputURL, setInputUrl] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [linkList, setLinkList] = useState([]);
  const [buttonText, setButtonText] = useState(Array(linkList.length).fill('Copy'))

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

      // Setting short link to be use on copy function
      setShortLink(shortLink);

      // Setting "Copy" text on each button to make in independent
      setButtonText([...buttonText, 'Copy!']);
    } catch (error) {
      console.error(error);
    }

  };

  //Catching user input link
  const handleInputChange = (e) => {
    setInputUrl(e.target.value)
  }

  // Handling Link Copy
  const handleCopy = (index) => {
    navigator.clipboard.writeText(linkList[index].shortLink);

    //Updating the buttonText variable to say "Copied!" for the specific button based on the index
    const updatedButtonText = [...buttonText];
    updatedButtonText[index] = 'Copied!';

    setButtonText(updatedButtonText)
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
                      // Passing the function reference so it will be called only when the button is clicked to avoid infinite loop and too many re-renders
                      onClick={() => handleCopy(index)}
                    >
                      {buttonText[index]}
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