import React from 'react'

const Moviedata = ({data}) => {
  return (
    <div  className=" h-[20rem] mx-[1rem] my-[1rem] mb-[6rem] ">
        <div className='bg-black opacity-65 ease-in-out duration-500 hover:scale-105 hover:opacity-100 rounded-[1rem]' >
        <img src={"https://image.tmdb.org/t/p/original//" + data.poster_path} className="w-full h-full object-cover rounded-[1rem] hover:ring-4 mb-4"></img></div>
        <h1>{data.title||data.name}</h1>
        <p>{data.release_date||data.first_air_date}</p>
    </div>
  )
}

export default Moviedata
