import { CustomForm, Footer, Navbar } from '@/components'
import Boost from '@/pages/Boost';
import Hero from '@/pages/Hero';
import Statistics from '@/pages/Statistics';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className='flex flex-col justify-center items-center'>
          <Hero />
          {/* Shorten link input */}
          <CustomForm />
        </section>
        {/* Info Section */}
        <Statistics />
      </main>
      <footer>
        {/* Boost links bar */}
        <Boost />
        {/* Footer Links */}
        <Footer />
      </footer>
    </>
  )
}
