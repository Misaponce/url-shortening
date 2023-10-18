import React from 'react'

const CustomForm = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Form */}
      <div className='custom-form flex flex-col justify-center m-8 p-4 sm:py-6 gap-4 sm:gap-1 rounded-[12px] sm:flex-row sm:w-3/5'>
          <input 
              type='text' 
              placeholder='Shorten a link here...'
              className='bg-white mx-8 mt-4 sm:m-2 rounded-md px-4 py-2 sm:w-full'
          />
          <button className='mx-8 mb-4 sm:m-2 shorten-btn text-white font-bold rounded-md px-4 py-2 sm:w-1/2'>Shorten it!</button>
      </div>
      {/* Shorten links */}
    </div>
  )
}

export default CustomForm