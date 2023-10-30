import Image from 'next/image'
import React from 'react'
import HeroImg from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <div className="hero min-h-screen flex-col justify-center overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={HeroImg} alt='Hero-Illustration' className="max-w-lg rounded-lg"/>
        <div className='flex flex-col items-center lg:items-start text-center lg:text-start'>
          <h1 className="text-5xl font-bold">More than just shorter links</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className='flex justify-center lg:justify-start'>
            <button className="btn-md hero-btn text-white px-10 rounded-full text-xl">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero