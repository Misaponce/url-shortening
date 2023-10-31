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
      <div className='cards-container flex flex-col items-center sm:flex-row my-5'>
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