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
        <section>
          <Hero />
        </section>
      {/* Shorten link form*/}
        <CustomForm />
        {/* Info Section */}
        <Statistics />
      </main>
      {/* Boost links bar */}
      <Boost />
      {/* Footer Links */}
      <Footer />
    </>
  )
}
