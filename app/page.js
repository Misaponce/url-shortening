import { Navbar } from '@/components'
import { Hero } from '@/pages'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section>
          <Hero />
          {/* Shorten link input */}
          <div>
            <input type='text' placeholder='Shorten a link here'/>
            <button>Shorten it!</button>
          </div>
        </section>
        {/* Info Section */}
        <section>
          <h2>
            Advanced Statistics
          </h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard
          </p>

          {/* cards container */}
          <div>
            <div>
              <h1>
                card info
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        {/* Boost links bar */}
        <div>
          Boost your links today
        </div>
        {/* Footer Links */}
        <div>
          <h2>
            Shortly
          </h2>
          <ul>
            <li>Features</li>
            <li>Blog</li>
            <li>...</li>
          </ul>
        </div>
      </footer>
    </>
  )
}
