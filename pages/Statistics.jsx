import CustomCard from '@/components/CustomCard'
import { Cards } from '@/constants';
import React from 'react'

const Statistics = () => {
  return (
    <section className='min-h-screen flex flex-col items-center p-5'>
      <h2>
        Advanced Statistics
      </h2>
      <p>
        Track how your links are performing across the web with our advanced statistics dashboard
      </p>

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