import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { fetchTrendingMovies } from "./slice";

const Hero = () => {

 const[input,setInput]=useState();


 const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false
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

 

    function handleClick(e){
        e.preventDefault();
        console.log(input)
        
    }
  return (
    <div className="flex flex-col h-[100vh] justify-center align-center w-[100%] text-center items-center relative">
    
    
    <div className="h-screen w-full text-white z-10 absolute">
    <Slider {...settings}>
    {trendingMoviesByDay.map((movie)=>{
     return(
      <div className="h-screen w-full">
      <img src={"https://image.tmdb.org/t/p/original//" + movie.poster_path } className="w-full h-screen opacity-30 object-cover"></img>
      </div>
     );
        
    })}
    </Slider>
      
      </div>
    <div className="h-screen absolute bg-black  opacity-50">
    </div>

    <div className="relative z-20">
      <h1 className="sm:text-5xl text-4xl font-bold text-white mb-4">Welcome.</h1>
      <p className="max-w-lg text-center text-white sm:text-[1rem] text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
        exercitationem nisi necessitatibus totam vero dolore nihil quas ipsum!
        Labore, totam.
      </p>
      <form  className="my-[2rem] flex" onClick={(e)=>{handleClick(e)}} >
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="Text" className=" focus:outline-none rounded-l-[1rem] sm:w-[25rem] sm:h-[3.4rem] h-10 pl-[1rem]  "></input>
        <Link to={"search/"+input}><button  className="bg-blue-300 sm:h-[3.4rem] h-10 w-[5rem] rounded-r-[1rem] focus:outline-pink-600 ">Search</button></Link>
      </form>
      </div>

    </div>
  );
};

export default Hero;



