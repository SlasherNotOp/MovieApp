import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieComponent from './MovieComponent';
import Moviedata from './Moviedata';
import { fetchTrendingMoviesByDay, fetchTrendingMoviesByweek } from './slice';

const First = () => {

  const dispatch=useDispatch();

  const{trendingMoviesByDay,trendingMoviesByWeek}= useSelector((state)=>{
    return state.movieReducer;
  });

  useEffect(()=>{
    dispatch(fetchTrendingMoviesByweek())
  },[dispatch]);



  useEffect(()=>{
    dispatch(fetchTrendingMoviesByDay())
  },[dispatch]);

  console.log(trendingMoviesByDay,trendingMoviesByWeek);

  return (
    <>
    
    <MovieComponent heading={"Trending"} data1={trendingMoviesByDay} data2={trendingMoviesByWeek} choice1={"day"} choice2={"week"}/>
    
      
    </>
  )
}

export default First
