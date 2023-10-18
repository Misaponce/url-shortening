import React from 'react'
import BrandRecognitionLogo from '../assets/images/icon-brand-recognition.svg';
import Image from 'next/image';

const CustomCard = ({ logo, title, description}) => {
  return (
    <div className="card w-96">
      <figure className="px-10 pt-10">
        <div className='card-logo-container'>
          <Image src={logo} alt={`${logo}-logo`} />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CustomCard