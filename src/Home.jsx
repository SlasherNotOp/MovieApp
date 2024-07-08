import React from 'react'
import { useSelector } from 'react-redux';
import First from './First';
import Hero from './Hero';

const Home = () => {

  
  const{popularTv}=useSelector((state)=>{
    return state.movieReducer;
  });

  let image=null;
  const num=popularTv[Math.floor(popularTv.length*Math.random())];
  if(num!=null){
   image="https://image.tmdb.org/t/p/original//"+num.backdrop_path;
  console.log(image)
  }

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