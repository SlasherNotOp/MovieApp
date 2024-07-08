import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieComponent from './MovieComponent';
import { fetchPopularMovies, fetchTopRated, fetchTrendingMovies} from './slice';

const First = () => {

  const dispatch=useDispatch();


  const{
    trendingMoviesByDay,
    trendingMoviesByWeek,
    popularMovie,
    popularTv,
    topRatedMovie,
    topRatedTv,
    


  }= useSelector((state)=>{
    return state.movieReducer;
  });

  useEffect(()=>{
    dispatch(fetchTrendingMovies())
  },[dispatch]);

  useEffect(()=>{
    dispatch(fetchPopularMovies())
  },[dispatch]);

  useEffect(()=>{
    dispatch(fetchTopRated())
  },[dispatch]);

  

  

  

  console.log(popularTv);

  return (
    <>
    
    <MovieComponent heading={"Trending"} data1={trendingMoviesByDay} data2={trendingMoviesByWeek} choice1={"day"} choice2={"week"}/>
    <MovieComponent heading={"What's Popular"} data1={popularMovie} data2={popularTv} choice1={"Movie"} choice2={"TV Shows"}/>
    <MovieComponent heading={"Top Rated"} data1={topRatedMovie} data2={topRatedTv} choice1={"Movie"} choice2={"TV Shows"}/>
    </>
  )
}

export default First
