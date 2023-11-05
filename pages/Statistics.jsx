import CustomCard from '@/components/CustomCard'
import { Cards } from '@/constants';
import React from 'react'

const Statistics = () => {
  return (
    <section className='min-h-screen flex flex-col items-center p-5'>
      <div className='my-8 flex flex-col items-center text-center'>
        <h2 className='text-4xl p-4 font-extrabold'>
          Advanced Statistics
        </h2>
        <p className='text-gray-400 p-4 w-3/4 sm:w-1/2'>
          Track how your links are performing across the web with our advanced statistics dashboard
        </p>
      </div>

      {/* cards container */}
      <div className='cards-container relative flex gap-3 flex-col items-center sm:flex-row my-5'>
        {/* Cyan Bar */}
        <hr className='border-4 border-cyan-300 w-full sm:w-3/4
        absolute transform rotate-90 sm:rotate-0 top-2/4 sm:left-2'>
        </hr>
        {Cards.map((card) => (
          <div key={card.title}>
            <CustomCard 
              logo={card.logo}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Statistics