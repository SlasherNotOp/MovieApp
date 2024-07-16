import React, { useState } from 'react'
import Moviedata from './Moviedata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 4,

    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
         
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

const MovieComponent = ({heading,choice1,choice2,data1,data2}) => {
    const [flag, setFalg]=useState(true);
  return (
    <div className='text-white w-full'>

    <div className='flex justify-between'>
        <h1 className='sm:text-3xl text-xl'>{heading}</h1>
        <p className='flex gap-[1rem] cursor-pointer text-xl'>
            <span className={ flag?"text-red-500 duration-300  ":" text-white "} onClick={()=>setFalg(true)}>{choice1}</span>
            <span className={!flag?"text-red-500 duration-300  ":" text-white "} onClick={()=>setFalg(false)}>{choice2}</span>
        </p>
    </div>


    
    <Slider {...settings} >
{
    flag?(
    data1.map((movie,index)=>{
        return(
        <Moviedata data={movie} key={index}/>
        )
    }))
    :(
        data2.map((movie,index)=>{
        return(
        <Moviedata data={movie} key={index}/>
        )
    }))
}
    </Slider>
    
      
    </div>
  )
}

export default MovieComponent

