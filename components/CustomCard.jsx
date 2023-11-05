import React from 'react'
import Image from 'next/image';

const CustomCard = ({ logo, title, description}) => {
  return (
    <div className={`card w-96 bg-white mb-10 sm:m-1 relative shadow-lg`}>
      <figure className="px-10 absolute top-0 left-1/2 sm:left-1/4 transform -translate-x-1/2 sm:-translate-x-3/4 sm:ms-2 z-10 -mt-8">
        <div className='card-logo-container rounded-full p-5 my-2 shadow-lg'>
          <Image src={logo} alt={`${logo}-logo`} />
        </div>
      </figure>
      <div className="card-body items-center text-center mt-8">
        <h2 className="card-title">{title}</h2>
        <p className='text-gray-400'>{description}</p>
      </div>
    </div>
  )
}

export default CustomCard