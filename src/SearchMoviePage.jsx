import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Moviedata from './Moviedata';
import { fetchsearchMovies } from './slice';


const SearchMoviePage = () => {

    
    const dispatch=useDispatch();

    const {searchMovies}=useSelector((state)=>{
        return state.movieReducer;});
    console.log(searchMovies);

    useEffect(()=>{
        dispatch(fetchsearchMovies(searchTerm))
      },[dispatch]);
    


    const{searchTerm}= useParams();
  return (
    <div className='bg-[#04152d] h-screen w-full mx-[10rem]'>
      <h1>this is seach result</h1>
      <div className='text-white w-full'>
        {
            searchMovies.map((movie,index)=>{
                return(
                    <>
                    <Moviedata data={movie} key={index}/>

                    </>
                );
            })
        }
      </div>
    </div>
  )
}

export default SearchMoviePage
