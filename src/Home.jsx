import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import First from './First';
import Hero from './Hero';
import { fetchTrendingMovies } from './slice';

const Home = () => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    waitForAnimate: true,    
  };
  

  const{
    trendingMoviesByDay,
  
  }= useSelector((state)=>{
    return state.movieReducer;
  });
  
  const dispatch=useDispatch();
  
  
  
  useEffect(()=>{
    dispatch(fetchTrendingMovies())
  },[dispatch]);
  

  
  
  return (
    <div className='bg-[#04152d] h-full w-full relative'>


<div className="h-screen w-[98.9vw] text-white z-10 absolute">
<Slider {...settings}>
{trendingMoviesByDay.map((movie)=>{
 return(
  <div className="h-[80vh] w-screen">
  <img src={"https://image.tmdb.org/t/p/original//" + movie.backdrop_path } className="w-screen h-full opacity-30 object-cover"></img>
  </div>
 );
    
})}
</Slider>
  
  </div>

  


    
    <div className="h-[80vh] w-full absolute top-0 bg-black  opacity-50">
    
    </div>
    <div className='lg:mx-[10rem] mx-16 relative'>

      <Hero/>
      <First/>
      </div>
    </div>
  )
}

export default Home;




