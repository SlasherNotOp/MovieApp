import React from 'react'
import First from './First';
import Hero from './Hero';

const Home = () => {
  return (
    <div className='bg-[#04152d]'>
    <div className='mx-[10rem]'>
      <Hero/>
      <First/>
      </div>
    </div>
  )
}

export default Home;