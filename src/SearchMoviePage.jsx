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
    <div className='bg-[#04152d] h-full w-full mt-14'>
      
      <div className='text-white w-full flex flex-wrap px-20 pt-16'>
        {
            searchMovies.map((movie,index)=>{
                return(
                    <>
                    <div className='w-1/6'>
                    <Moviedata data={movie} key={index}/>
                    </div>
                    </>
                );
            })
        }
      </div>
    </div>
  )
}

export default SearchMoviePage
